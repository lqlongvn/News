import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import List from './Screen/List';
import Login from './Screen/Login';
import Detail from './Screen/Detail';

const StackNavigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Login" component={Login} />
        <StackNavigator.Screen name="List" component={List} />
        <StackNavigator.Screen name="Detail" component={Detail} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
