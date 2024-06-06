import React from "react";
import { Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "../screens/style";

const MovieList = ({ movies, handlePress }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={movies}
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
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  loader: {
    marginVertical: 50,
  },
});
export default MovieList;
