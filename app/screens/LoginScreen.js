import { YStack } from 'tamagui';
import { Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { tokens } from '../../tamagui.config';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <YStack 
        gap="5%%" 
        w="100%" 
        h="100%" 
        bg={tokens.color.tertiary}
        jc='space-evenly'
        ai="center" 
      >
        <Image 
          source={require('../../assets/Logo.png')} 
          style={{ width: 249, height: 96,}} 
        />
      </YStack>
    </SafeAreaView>
  );
};

export default LoginScreen;
