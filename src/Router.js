import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Category from './pages/Categories/Category';
import Detail from './pages/Details/Detail';
import Meals from './pages/Meals/Meals';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Category}
          options={{
            headerTitleStyle: {color: 'orange'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            headerTintColor: 'orange',
            headerTitleStyle: {color: 'orange'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTintColor: 'orange',
            headerTitleStyle: {color: 'orange'},
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F09C3B',
  },
});
