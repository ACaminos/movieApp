import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Text, View, Image, StyleSheet } from 'react-native'

interface Props{
    actor: Cast;
}

export const CastItem = ( { actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
    <View style={styles.container}>
        <Image
            source={{uri}}
            style={{width:50, height:50, borderRadius:10}}
            />

        <View style={styles.actorInfo}>
            <Text style={{ fontSize: 18, color:'black', fontWeight: 'bold'}}>{ actor.name }</Text>

            <Text style={{fontSize: 16, color:'black', opacity: 0.7}}>{ actor.character }</Text>


        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation:10,
        padding: 5
    },
    actorInfo: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10
    }
})