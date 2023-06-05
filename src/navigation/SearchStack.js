import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import SearchScreen from "../screens/SearchScreen";

const Stack=createNativeStackNavigator();

const SearchStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name={screen.search.searchs}
            component={SearchScreen}
            options={{title:"Searchs"}}
            />
        </Stack.Navigator>
    )
}

export default SearchStack;