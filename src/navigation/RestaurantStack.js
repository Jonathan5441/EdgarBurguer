import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import RestaurantScreen from "../screens/Restaurants/RestaurantScreen";
import AddRestaurantScreen from "../screens/Restaurants/AddRestaurantScreen"

const Stack=createNativeStackNavigator();

const RestaurantStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name={screen.restaurant.restaurants}
            component={RestaurantScreen}
            options={{title:"Restaurantes"}}
            />
            <Stack.Screen
            name={screen.restaurant.addRestaurant}
            component={AddRestaurantScreen}
            options={{title: "Nuevo Restaurante"}}
            />
        </Stack.Navigator>
    )
}

export default RestaurantStack;