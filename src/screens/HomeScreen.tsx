import React from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width : windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color={"red"} size={100} />
      </View>
    )
  }


  return (
    <ScrollView>
      <View style={{paddingTop: top + 20, backgroundColor:'black'}}>

      {/* Carousel Principal */}
        <View style={{height:440}}>
          <Carousel
            data = { nowPlaying }
            renderItem = { ( { item } : any ) => <MoviePoster movie = { item } /> }
            sliderWidth = { windowWidth }
            itemWidth = { 300 }
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Peliculas Populares */}
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />


      </View>

    </ScrollView>
  )
}
