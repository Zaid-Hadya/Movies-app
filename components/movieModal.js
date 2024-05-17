import React from "react";
import { Text, View, Button, Modal } from "react-native";
import { styles } from "../screens/style";
const MovieModal = ({ modalVisible, selectedMovie, setModalVisible }) => {
  return (
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
  );
};

export default MovieModal;
