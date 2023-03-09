import React from 'react';
import { Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterfaces';
import  Icon  from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    movieFull : MovieFull;
    cast : Cast[];
}

export const MovieDetails = ( { movieFull, cast } : Props ) => {
  return (
    <>
        {/* Detalles */}
        <View style={{ marginHorizontal: 20 }}>
            <View style={{flexDirection: 'row'}}>
                <Icon
                    name='star-outline'
                    color="grey"
                    size={ 16 }
                />
                <Text style={{color:'black'}}> { movieFull.vote_average }</Text>
                <Text style={{color:'black', marginLeft: 5}}>
                    - { movieFull.genres.map(g => g.name).join(', ')}   {/* se hace un map de cada uno de los generos que hay. Como 'genres' es una arreglo se pasa por un map para transformarlo, Despues se le hace un Join para unirlos junto con una coma   */}
                </Text>
            </View>

        {/* Historia */}
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold', color:'black'}}>
                Historia
            </Text>

            <Text style={{color:'black', fontSize: 16}}>{movieFull.overview}</Text>

        {/* Presupuesto */}
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold', color:'black'}}>
                Presupuesto
            </Text>

            <Text style={{color:'black', fontSize: 16}}>{ currencyFormatter.format( movieFull.budget, { code: 'USD' } ) }</Text>

        </View>

        {/* Casting */}
        <View style={ { marginTop: 10, marginBottom: 100 } }>
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold', color:'black'}}>
                Actores
            </Text>
            <CastItem actor={ cast[0] }/>
        </View>

    </>
  )
}
