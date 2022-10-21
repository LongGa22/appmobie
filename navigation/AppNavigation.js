import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import BannerDetail from '../screens/BannerDetail';
import AnimalDetail from '../screens/AnimalDetail';
import SearchScreen from '../screens/SearchScreen';


const Stack = createStackNavigator();

function AppStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{headerShown:false}}>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='BannerDetail' component={BannerDetail}/>
      <Stack.Screen name='AnimalDetail' component={AnimalDetail}/>
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
    </Stack.Navigator>
  );
}

const AppNavigation = () => {
    return(
       <NavigationContainer>
            <AppStackNavigator/>
       </NavigationContainer>
    );
};

export default AppNavigation;