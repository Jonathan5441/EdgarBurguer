import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import AccountScreen from "../screens/AccountScreen";

const Stack=createNativeStackNavigator();

const AccountStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name={screen.account.accounts}
            component={AccountScreen}
            options={{title:"Accounts"}}
            />
        </Stack.Navigator>
    )
}

export default AccountStack;