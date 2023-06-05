import { View, Text} from 'react-native';
import React from 'react';
import { Button } from "@rneui/base";
import { screen } from '../../utils/screenName';

const RestaurantScreen = (props) => {
  const {navigation}=props;
  const goToAddRestaurant=()=>{
    navigation.navigate(screen.restaurant.addRestaurant);
  }
  return (
    <View>
      <Text>Estamos en la screen de Restaurantes</Text>
      <Button title="Crear Restaurante" onPress={goToAddRestaurant}/>
    </View>
  )
}

export default RestaurantScreen