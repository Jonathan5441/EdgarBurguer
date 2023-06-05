import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import {screen} from "../utils/screenName";
import RestaurantStack from "./RestaurantStack";
import FavoritesStack from "./FavoriteStack";
import RankingStack from "./RankingStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountsStack";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#76D7C4",
        headerShown:false,
        tabBarInactiveTintColor: "#F8C471",
        tabBarIcon: ({ color, size }) => edgar(route,color,size),
      })}
    >
      <Tab.Screen name={screen.restaurant.tab} component={RestaurantStack} options={{title: "Restaurantes"}}/>
      <Tab.Screen name={screen.favorite.tab} component={FavoritesStack} options={{title: "Favoritos"}}/>
      <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{title: "Ranks"}}/>
      <Tab.Screen name={screen.search.tab} component={SearchStack} options={{title: "Buscar"}}/>
      <Tab.Screen name={screen.account.tab} component={AccountStack} options={{title: "Cuenta"}}/>
    </Tab.Navigator>
  );
};

const edgar = (route, color, size) => {
  let iconName;
  if (route.name == screen.restaurant.tab) {
    iconName = "arrange-bring-forward";
  }
  if (route.name == screen.favorite.tab) {
    iconName = "star-check";
  }
  if (route.name == screen.ranking.tab) {
    iconName = "cat";
  }
  if (route.name == screen.search.tab) {
    iconName = "tab-search";
  }
  if (route.name == screen.account.tab) {
    iconName = "account-arrow-up-outline";
  }
  return(
    <Icon
        type="material-community"
        name={iconName}
        color={color}
        size={size}
    />
  )
};
