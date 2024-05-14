import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");

export default function MovieList({ title, data }) {
  const navigation = useNavigation(); // Add this line to access navigation object

  let movieName = "Ant-Man and the Wasp: Quantumania";

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text style={styles.text} className="text-lg">
            Movie List
          </Text>
        </TouchableOpacity>
      </View>

      {/* Movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.navigate("Movie", item)}
          >
            <View className="space-y-1 mr-4">
              {" "}
              {/* Fixed typo nr-4 -> mr-4 */}
              <Image
                source={require("../assets/Poster1.png")}
                style={{
                  width: width * 0.33,
                  height: height * 0.22,
                  borderRadius: 10,
                }} // Added borderRadius
              />
              <Text className="text-neutral-300 ml-1">
                {movieName.length > 14
                  ? movieName.slice(0, 14) + "..."
                  : movieName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
