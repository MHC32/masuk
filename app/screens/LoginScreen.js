import { YStack, Input, XStack, Button } from "tamagui";
import {
  Image,
  StatusBar,
  Text,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { tokens } from "../../tamagui.config";
import { useFonts } from "expo-font";
const {
  widthPercentageToDP: wp,
  heightPercentageToDP: hp,
} = require("react-native-responsive-screen");

const LoginScreen = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  const marginLogo = (26 / height) * 100;
  const marginText = (54 / height) * 100;
  const marginLeft = (88 / width) * 100;
  const widthContainerLogo = (296 / width) * 100;
  const heightContainerLogo = (96 / height) * 100;
  const widthContainerText = (208 / width) * 100;
  const heightContainerText = (54 / height) * 100;
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
        w="$responsiveContainerWidth"
        h="$responsiveContainerHeight"
        bg={tokens.color.tertiary}
        ai="center"
      >
        <XStack
          w={`${widthContainerLogo}%`}
          h={`${heightContainerLogo}%`}
          marginLeft={`${marginLeft}`}
          marginTop={`${marginLogo}%`}
          jc="center"
          ai="center"
        >
          <Image
            source={require("../../assets/Logo.png")}
            style={{ width: 249, height: 96 }}
          />
        </XStack>

        <XStack
          w={`${widthContainerText}%`}
          h={`${heightContainerText}%`}
          marginTop={`${marginText}%`}
          jc="center"
        >
          <Text
            style={{
              fontFamily: "Poppins-Semibold",
              fontSize: 38,
              letterSpacing: 2,
            }}
          >
            Masuk
          </Text>
        </XStack>
      </YStack>
    </SafeAreaView>
  );
};

export default LoginScreen;
