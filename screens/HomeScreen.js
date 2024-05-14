import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';

export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]); /*Array def*/

  // Define 'upcoming' data here or import it from another file
  const upcoming = [/* Define your upcoming movie data here */];

  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search bar and logo */}
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
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending Movies */}
        <TrendingMovies data={trending} />

        {/* Upcoming Movies */}
        <TrendingMovies title="Upcoming" data={upcoming} />
      </ScrollView>
    </View>
  );
}
