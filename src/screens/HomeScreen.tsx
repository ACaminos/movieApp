import React from 'react'
import { View, ActivityIndicator, Dimensions, FlatList, Text, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/horizontalSlider';

const {width : windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const { peliculasEnCine, isLoading } = useMovies();

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
      <View style={{marginTop: top + 20}}>

      {/* Carousel Principal */}
        <View style={{height:440}}>
          <Carousel
            data = { peliculasEnCine }
            renderItem = { ( { item } : any ) => <MoviePoster movie = { item } /> }
            sliderWidth = { windowWidth }
            itemWidth = { 300 }
          />
        </View>

        {/* Peliculas Populares */}
        <HorizontalSlider title="En cine" movies={peliculasEnCine} />
      </View>

    </ScrollView>
  )
}
