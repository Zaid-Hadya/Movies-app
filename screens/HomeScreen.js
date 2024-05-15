import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Button,
  StyleSheet,
} from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import MovieItem from "../components/movieItem";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Define your data here
  const data = [
    {
      id: 1,
      title: "Oppenheimer",
      imageURL:
        "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
      description:
        "Oppenheimer is a 2023 epic biographical thriller drama film written, directed, and produced by Christopher Nolan. It follows the life of J. Robert Oppenheimer, the American theoretical physicist who helped develop the first nuclear weapons during World War II.",
    },
    {
      id: 2,
      title: "Godzilla x Kong",
      imageURL:
        "https://lhsmagpie.com/wp-content/uploads/2024/04/GxK-website-wide.jpg",
      description:
        "A giant creature named Kong is on a quest to find his home. However, he and the inhabitants of the Earth face a major obstacle when another titan, whose ambition is to destroy him and the humanity, enters his path. In the first part of the story, Kong fights against Godzilla to prevent him from destroying the planet.",
    },
    {
      id: 3,
      title: "The Amazing Spider-Man",
      imageURL:
        "https://artofthemovies.co.uk/cdn/shop/products/IMG_9256.jpg?v=1662130213",
      description:
        "Confident in his powers as Spider-Man, Peter Parker (Andrew Garfield) embraces his new role as a hero and spends time with Gwen Stacy (Emma Stone) in between protecting New York from criminals. However, his greatest battle yet is about to begin. With the emergence of Electro (Jamie Foxx), Peter must confront an enemy far more powerful than he is.",
    },
    {
      id: 4,
      title: "Joker",
      imageURL: "https://i.redd.it/3k0ldk1dycl31.jpg",
      description:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure. In addition to being a clown at work, Arthur Fleck wants to perform stand-up comedy.",
    },
    {
      id: 5,
      title: "Pirates of the Caribbean",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNAJ8rjiQmcbkyUWL4YRBNSX1TMjaartc4luB0x3Zb2Cg1vhpfvMNxNylsrYlY0wu6kA&usqp=CAU",
      description:
        "The film stars Johnny Depp, Geoffrey Rush, Orlando Bloom, and Keira Knightley. The story follows pirate Captain Jack Sparrow (Depp) and blacksmith Will Turner (Bloom) as they rescue the kidnapped Elizabeth Swann (Knightley) from the crew of the Black Pearl, captained by Hector Barbossa (Rush).",
    },
    {
      id: 6,
      title: "Shrek",
      imageURL:
        "https://image.tmdb.org/t/p/original/cG3Am50LUD64j8uTyjLFUpve40x.jpg",
      description:
        "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back. It's the story of a terrifying green ogre by the name of Shrek, who lives in a swamp.",
    },
    {
      id: 7,
      title: "Jaws",
      imageURL:
        "https://alltherightmovies.com/wp-content/uploads/2023/04/Capture-4-e1681473230496.jpg",
      description:
        "Jaws, American suspense and horror film, released in 1975, that was directed by Steven Spielberg and is considered the first summer blockbuster. Based on the 1974 novel of the same name by author Peter Benchley, it tells the story of a great white shark that terrorizes a beach resort town.",
    },
    {
      id: 8,
      title: "Avengers Infinity War",
      imageURL:
        "https://m.media-amazon.com/images/I/71eHZFw+GlL._AC_UF1000,1000_QL80_.jpg",
      description:
        "On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
    },
  ];

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
        {data.map((item) => (
          <MovieItem
            key={item.id}
            item={item}
            onPress={() => handlePress(item)}
          />
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
            <Text>Description: {selectedMovie?.description}</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HomeScreen;
