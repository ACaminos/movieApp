import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

  const { peliculasEnCine, isLoading } = useMovies();
  // console.log(peliculasEnCine[1]?.title)

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color={"red"} size={100} />
      </View>
    )
  }


  return (
    <View>
      <MoviePoster />
    </View>
  )
}
