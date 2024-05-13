import {View, Text, Touchable, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState} from "react"
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import TrendingMovies from '../components/trendingMovies';


export default function HomeScreen(){
const [trending, setTrending] = useState([1,2,3])/*Array def*/

    return (
    <View className="flex-1 bg-neutral-800">
  {/*search bar and logo*/}
  
   
  <View className="flex-row justify-between items-center mx-4">
      <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
      <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
        <Text style={{ color: 'red' }}>Mov</Text>ies
      </Text>
      <TouchableOpacity>
        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
      </TouchableOpacity>
    </View>
  
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 10}}
      >
        {/*Trending Movies*/}

      <TrendingMovies data={trending} />
      </ScrollView>

    </View>
    )
}