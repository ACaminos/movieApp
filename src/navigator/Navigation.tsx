import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Movie } from '../interfaces/movieInterfaces';

export type RootStackParams = {
  HomeScreen: undefined; //Undefined porque no recibe ningun argumento.
  DetailScreen: Movie; //Detail recibe una pelicula como argumento. Movie proviene de la interfaz armada en moveInterfaces.
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false, cardStyle:{backgroundColor:'white'}}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}