import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Connection from './src/page/connection';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Maitre from './src/page/Home/maître';
import Choisir from './src/page/Home/choisir';

import Home from './src/page/Home';
// import InscriptionApprenat from './src/page/Home/InscriptionApprenant';
import Accueil from './src/page/Home/Accueil';
import login from './src/page/Home/Login';
import Login from './src/page/Home/Login';
import Signup from './src/page/Home/Signup';
import Confirmation from './src/page/Home/Confirmation';
import Tabs from './navigation/Tabs';
import accueil from './navigation/accueil';





const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
             
      <Stack.Screen
              name="Maitre"
              component={Maitre}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Choisir"
              component={Choisir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
             {/* <Stack.Screen
              name="Inscription"
              component={InscriptionApprenat}
              options={{ headerShown: false }}
            /> */}
             <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Accueil"
              component={Accueil}
              // options={{ headerShown: true}}
            />
             <Stack.Screen
              name="accueil"
              component={accueil}
              // options={{ headerShown: true }}
            />
            {/* <Stack.Screen
              name="Confirmation"
              component={Confirmation}
              options={{ headerShown: false }}
            /> */}
             <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
