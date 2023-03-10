import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Navigation, RootStackParams } from '../navigator/Navigation';
import Icon from "react-native-vector-icons/Ionicons";
import {UseMovieDetails} from '../hooks/UseMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'> {

}

export const DetailScreen = ( { route, navigation } : Props ) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = UseMovieDetails(movie.id)

  // console.log({cast})

  // console.log('Id de pelicula : ', movie.id)

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

        {
          isLoading ?
            <ActivityIndicator size={ 30 } color="grey" style={{ marginTop: 20 }} />
              :
            <MovieDetails movieFull={ movieFull! } cast={ cast }/>
        }

        {/* Boton para cerrar */}
        <TouchableOpacity onPress={ () => navigation.pop() } style={styles.backButton}>
          <Icon name="arrow-back-outline" size={50} color={'white'} />
        </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer : {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation:9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterImage : {
    flex: 1,
  },
  marginContainer : {
    marginHorizontal: 20,
    marginTop: 20
  },
  subtitle : {
    color: 'black',
    fontSize: 16,
    opacity: 0.8
  },
  title : {
    color : 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  imageBorder : {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 10,
    left: 5
  }
})