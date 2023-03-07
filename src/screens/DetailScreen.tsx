import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigator/Navigation';

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'> {

}

export const DetailScreen = ( { route } : Props ) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  // console.log(movie)

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
  }
})