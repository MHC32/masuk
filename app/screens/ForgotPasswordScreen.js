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

const ForgotPasswordScreen = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  const marginLogo = (52 / height) * 100;
  const marginText = (108 / height) * 100;
  const marginLeft = (120 / width) * 100;
  const widthContainerLogo = (296 / width) * 100;
  const heightContainerLogo = (96 / height) * 100;
  const widthContainerText = (416 / width) * 100;
  const heightContainerText = (108 / height) * 100;
  const widthContainerForms = (279 / width) * 100;
  const heightContainerForms = (68 / height) * 100;
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
        bg="$tertiary"
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
              fontSize: 32,
              letterSpacing: 2,
            }}
          >
            Luppa Password
          </Text>
        </XStack>
      </YStack>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
