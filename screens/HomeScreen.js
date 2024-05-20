import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "./style";
import MovieList from "../components/flatList"; // Renamed to avoid name conflict
import MovieModal from "../components/movieModal"; // Renamed to follow PascalCase convention

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
        <Text style={styles.logoText}>
          <Text style={styles.redText}>Mov</Text>ies
        </Text>
        <TouchableOpacity>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
        </TouchableOpacity>
      </View>

      <MovieList movies={movies} handlePress={handlePress} />

      {selectedMovie && (
        <MovieModal
          modalVisible={modalVisible}
          selectedMovie={selectedMovie}
          setModalVisible={setModalVisible}
        />
      )}
    </View>
  );
};

export default HomeScreen;
