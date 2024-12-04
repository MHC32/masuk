import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { XStack, YStack } from "tamagui";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";

const ForgotPasswordScreen = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  const marginLogo = (52 / height) * 100;
  const marginText = (108 / height) * 100;
  const marginLeft = (120 / width) * 100;
  const widthContainerLogo = (296 / width) * 100;
  const heightContainerLogo = (96 / height) * 100;
  const widthContainerText = (208 / width) * 100;
  const heightContainerText = (54 / height) * 100;
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
    <SafeAreaView>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <YStack
        w="$responsiveContainerWidth"
        h="$responsiveContainerHeight"
        bg="$tertiary"
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
      </YStack>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
