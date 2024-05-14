import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Modal,
  Button,
} from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const data = [
    {
      id: 1,
      title: "Ant-Man and the Wasp",
      imageURL:
        "https://i.pinimg.com/originals/01/45/64/014564ac0f8d3a63969962dca30c7f1f.jpg",
    },
    {
      id: 2,
      title: "Godzilla x Kong",
      imageURL:
        "https://lhsmagpie.com/wp-content/uploads/2024/04/GxK-website-wide.jpg",
    },
    {
      id: 3,
      title: "The Amazing Spider-Man 2",
      imageURL:
        "https://artofthemovies.co.uk/cdn/shop/products/IMG_9256.jpg?v=1662130213",
    },
    {
      id: 4,
      title: "Joker",
      imageURL: "https://i.redd.it/3k0ldk1dycl31.jpg",
    },
    {
      id: 5,
      title: "Pirates of the Caribbean",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNAJ8rjiQmcbkyUWL4YRBNSX1TMjaartc4luB0x3Zb2Cg1vhpfvMNxNylsrYlY0wu6kA&usqp=CAU",
    },
    {
      id: 6,
      title: "Shrek",
      imageURL:
        "https://image.tmdb.org/t/p/original/cG3Am50LUD64j8uTyjLFUpve40x.jpg",
    },
    {
      id: 7,
      title: "Jaws",
      imageURL:
        "https://alltherightmovies.com/wp-content/uploads/2023/04/Capture-4-e1681473230496.jpg",
    },
  ];

  const handlePress = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      {/* Search bar and logo */}
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
        {data.map((item) => (
          <View key={item.id} style={styles.flatListContainer}>
            <Image
              source={{ uri: item.imageURL }}
              style={{ height: 200, width: "100%" }}
            />
            <Text style={styles.title}>{item.title}</Text>
            {/* Button to show modal */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.buttonText}>Show Details</Text>
            </TouchableOpacity>
          </View>
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
            {/* Add more details about the selected movie here */}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

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
  flatListContainer: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    marginHorizontal: 16,
    paddingBottom: 16,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 6,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#ff1100",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
