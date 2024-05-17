import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import MovieItem from "../components/movieItem";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=300d2fb47e3f5f8d5e569ce27884acdc"
      );
      const data = await response.json();
      if (data.results) {
        setMovies(data.results);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handlePress = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={styles.header}>
        <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
        <Text style={styles.logoText}>
          <Text style={{ color: "red" }}>Mov</Text>ies
        </Text>
        <TouchableOpacity>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Display movie list */}
        {movies.map((item) => (
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
        ))}
      </ScrollView>

      {/* Modal for displaying movie details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedMovie?.title}</Text>
            <Text>Description: {selectedMovie?.overview}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 20,
  },
  logoText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  outerMovieTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  outerMovieDate: {
    textAlign: "center",
    color: "white",
    paddingBottom: 30,
  },
});

export default HomeScreen;
