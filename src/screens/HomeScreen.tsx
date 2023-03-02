import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { ActivityIndicator } from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicator';

export const HomeScreen = () => {

  const { peliculasEnCine, isLoading } = useMovies();

  if(isLoading){
    return(
      <View>
        <ActivityIndicator color={"red"} size={100} />
      </View>
    )
  }

  // console.log(peliculasEnCine[0]?.title)

  return (
    <View>
        <Text>Home Screen</Text>
    </View>
  )
}
