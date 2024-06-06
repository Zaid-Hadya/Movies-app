import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { styles } from "../screens/style";

const PaginatedList = ({ handlePress }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (pageNum) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=300d2fb47e3f5f8d5e569ce27884acdc&page=${pageNum}`
      );
      const result = await response.json();

      // Check if the response is ok and has the results key
      if (response.ok && result.results) {
        const newData = data.concat(result.results);
        setData(newData);
        setLoading(false);
      } else {
        setLoading(false);
        console.error("Error in API response:", result);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleRefresh = () => {
    setData([]);
    setLoading(true);
    setPage(1);
  };

  const renderFooter = () => {
    return <ActivityIndicator style={styles.loader} />;
  };

  if (loading || refreshing) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id}
          style={styles.movieItem}
          onPress={() => handlePress(item)}
        >
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w342/${item.backdrop_path}`,
            }}
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
          />
          <Text style={styles.outerMovieTitle}>{item.title}</Text>
          <Text style={styles.outerMovieDate}>{item.release_date}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>Show Details</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );
};

export default PaginatedList;
