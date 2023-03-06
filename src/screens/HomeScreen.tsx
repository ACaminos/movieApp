import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
export const HomeScreen = () => {

  const { peliculasEnCine, isLoading } = useMovies();
  // console.log(peliculasEnCine[1]?.title)

  const { top } = useSafeAreaInsets();

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color={"red"} size={100} />
      </View>
    )
  }


  return (
    <View style={{marginTop: top + 20}}>
      {/* <MoviePoster movie={peliculasEnCine[0]} /> */}
      <Carousel
        data={ peliculasEnCine }
        renderItem= { () => <MoviePoster movie={ peliculasEnCine[0] } />}
        sliderWidth={ 350 }
        itemWidth= {300 }
      />
    </View>
  )
}
