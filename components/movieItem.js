import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const MovieItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.imageURL }}
        style={{ height: 200, width: "100%" }}
      />
      <Text style={styles.title}>{item.title}</Text>
      {/* Button to show modal */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Show Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    justifyContent: "center",
  },
});

export default MovieItem;
