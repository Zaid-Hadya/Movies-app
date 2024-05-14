import {View, Text, Touchable, TouchableWithoutFeedback} from 'react-native'
import React from 'react'


export default function TrendingMovies({data}){
    return (
    <View className="mb-8">
 <Text className="text-white text-xl mx-4 mb-5">Trending</Text>

  </View>
    )
}

const MovieCard = ({item}) => {
  return (
    <TouchableWithoutFeedback>
      <Text className="text-white">Movie</Text>
    </TouchableWithoutFeedback>
  )
}