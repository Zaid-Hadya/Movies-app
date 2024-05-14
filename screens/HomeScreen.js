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
} from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import MovieList from "../components/movieList";

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      title: "Ant-Man and the Wasp",
      imageURL:
        "https://i.pinimg.com/originals/01/45/64/014564ac0f8d3a63969962dca30c7f1f.jpg",
    },
    {
      id: 2,
      title: "Godzilla x Kong ",
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
      id: 5,
      title: "Joker",
      imageURL: "https://i.redd.it/3k0ldk1dycl31.jpg",
    },
    {
      id: 6,
      title: "Pirates of the Caribbean",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNAJ8rjiQmcbkyUWL4YRBNSX1TMjaartc4luB0x3Zb2Cg1vhpfvMNxNylsrYlY0wu6kA&usqp=CAU",
    },
    {
      id: 7,
      title: "Shrek",
      imageURL:
        "https://image.tmdb.org/t/p/original/cG3Am50LUD64j8uTyjLFUpve40x.jpg",
    },
    {
      id: 8,
      title: "Jaws",
      imageURL:
        "https://alltherightmovies.com/wp-content/uploads/2023/04/Capture-4-e1681473230496.jpg",
    },
  ];

  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search bar and logo */}
      <View className="flex-row justify-between items-center mx-4">
        <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          <Text style={{ color: "red" }}>Mov</Text>ies
        </Text>
        <TouchableOpacity>
          <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      ></ScrollView>

      <View>
        <SafeAreaView />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.flatListContainer}>
              <Image
                source={{ uri: item.imageURL }}
                style={{ height: 200, width: "100%" }}
              />
              <Text style={styles.Text}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    marginHorizontal: 16,
    paddingBottom: 16,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 24,
    paddingTop: 6,
    fontWeight: "bold",
  },
  separator: {
    height: 2,
    backgroundColor: "#f1f2f6",
  },
});
