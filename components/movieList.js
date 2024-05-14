import { View, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import Navigation from '../navigation';

export default function MovieList({ title, data }) {
    let movieName = 'Ant-Man and the Wasp: Quantumania';
    return (
        <View className="mb-8 space-y-4">
            <view className="mx-4 flex-row justify-between items-center"></view>
            <Text className="text-white text-xl">{title}</Text>
            <TouchableWithoutFeedback>
                <Text style={styles.text} className="text-lg">Movie List</Text>
            </TouchableWithoutFeedback>
        </View>
    )
        < ScrollView
    horizontal
    showsHorizontalScrollIndicator = { false}
    contentContainorStyle = {{ paddingHorizontal: 15 }
}
    >
    {
    data.map((item, index) => {
        return (
            <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation,navigate('Movie', item)}
            >
                <Text>
                    {movieName}
                </Text>
            </TouchableWithoutFeedback>

        )

    })




}
}