import Login from "./loginscreen"
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/appNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();

const App=()=>{
  return(
    <>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="AppNavigation" component={AppNavigation} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};
export default App;