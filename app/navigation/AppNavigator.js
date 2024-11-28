import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';



const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
            <Stack.Screen name='Reset password' component={ForgotPasswordScreen}/>
        </Stack.Navigator>
    )
}


export default AppNavigator