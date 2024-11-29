import { YStack, Input } from 'tamagui';
import { Image, StatusBar, Text, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { tokens } from '../../tamagui.config';
import { useFonts } from 'expo-font';

const LoginScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  })
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <YStack 
        gap="5%%" 
        w="100%" 
        h="100%" 
        bg={tokens.color.tertiary}
        ai="center" 
      >
        <Image 
          source={require('../../assets/Logo.png')} 
          style={{ width: 249, height: 96, marginTop:'15%'}} 
        />
        <Text style={{fontFamily:'Poppins-Semibold', fontSize:38, letterSpacing:2, marginTop:'15%'}}>Masuk</Text>
        <YStack w='279' h='80'  marginTop='10%' jc='space-around'>
          <Text style={{fontSize:14, fontFamily:''}} >Masukan Email</Text>
          <Input size='68' h='43' placeholder='Email' borderColor={tokens.color.Senary} borderRadius={12}/>
        </YStack>
        <YStack w='279' h='80'  marginTop='8%' jc='space-around'>
          <Text style={{fontSize:14, fontFamily:''}} >Masukan Password</Text>
          <Input size='68' h='43' placeholder='Password' borderColor={tokens.color.Senary} borderRadius={12}/>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
};

export default LoginScreen;
