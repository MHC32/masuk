import { YStack, Input, XStack, Button } from "tamagui";
import {
  Image,
  StatusBar,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { tokens } from "../../tamagui.config";
import { useFonts } from "expo-font";

const LoginScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });
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
          source={require("../../assets/Logo.png")}
          style={{ width: 249, height: 96, marginTop: "12%" }}
        />
        <Text
          style={{
            fontFamily: "Poppins-Semibold",
            fontSize: 38,
            letterSpacing: 2,
            marginTop: "15%",
          }}
        >
          Masuk
        </Text>
        <YStack w="279" h="80" marginTop="10%" jc="space-around">
          <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular" }}>
            Masukan Email
          </Text>
          <Input
            size="68"
            h="43"
            placeholder="Email"
            borderColor={tokens.color.Senary}
            borderRadius={12}
          />
        </YStack>
        <YStack w="279" h="80" marginTop="7%" jc="space-around">
          <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular" }}>
            Masukan Password
          </Text>
          <Input
            size="68"
            h="43"
            placeholder="Password"
            borderColor={tokens.color.Senary}
            borderRadius={12}
          />
        </YStack>
        <XStack w="300" jc="space-around" marginTop="10">
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 13 }}>
            Belum punya akun?
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Reset password')}>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              color: "#4285F4",
            }}
          >
            Lupa Password?
          </Text>
          </TouchableOpacity>
        </XStack>
        <TouchableOpacity  style={{alignSelf:'flex-start', marginLeft:'14%', color:'#4285F4'}} onPress={()=> navigation.navigate('Register')}>
          <Text style={{fontFamily:'Poppins-Regular', fontSize:13, color:'#4285F4'}}> Daftar</Text>
        </TouchableOpacity>
        <YStack w="279" h="30%" justifyContent="center" ai="center" >
          <TouchableOpacity
            style={{
              height: 55,
              width: 218,
              backgroundColor: "#4285F4",
              borderRadius: 12,
              justifyContent: "center",
              alignItems:'center',
              shadowColor: "#000",
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 0.16,
              shadowRadius: 8,
              elevation: 8,
            }}
          >
            <Text style={{fontFamily:'Poppins-Semibold', fontSize:24, color:'white'}}>Masuk</Text>
          </TouchableOpacity>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
};

export default LoginScreen;
