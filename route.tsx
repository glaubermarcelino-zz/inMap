import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Localizacao from './src/pages/Localizacao/Index';
import Comunidades from './src/pages/Comunidades/Comunidades';

const AppStack = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        tabBarOptions={{activeTintColor: '#1ee91e', style: {height: '8%',backgroundColor:'#fefefe'}}}
        initialRouteName="Login">
        <AppStack.Screen
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Image source={require('./src/pages/assets/icons/home.png')} />
            ),
          }}
          name="Home"
          component={Localizacao}
        />
        <AppStack.Screen
          name="Comunidades"
          options={{
            tabBarIcon: ({color, size}) => (
              <Image source={require('./src/pages/assets/icons/community-icon2.png')} />
            ),
          }}
          component={Comunidades}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
