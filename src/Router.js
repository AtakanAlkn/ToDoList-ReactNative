import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './screens/LoginScreens/SignIn/SignIn';
import SignUp from './screens/LoginScreens/SignUp/SignUp';
import Forgot from './screens/LoginScreens/Forgot/Forgot';
import Home from './screens/HomeScreens/Home/Home';
import Detail from './screens/HomeScreens/Detail/Detail';
import CustomHeaderBar from './screens/HomeScreens/components/CustomHeaderBar/CustomHeaderBar';
import CustomDetailHeaderBar from './screens/HomeScreens/components/CustomDetailHeaderBar/CustomDetailHeaderBar';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forgat"
          component={Forgot}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => <CustomHeaderBar />}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            header: ({navigation}) => (
              <CustomDetailHeaderBar
                onBackIcon={() => navigation.navigate('Home')}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
