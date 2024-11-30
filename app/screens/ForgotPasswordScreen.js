import { View, Text, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {XStack, YStack} from 'tamagui'
import React, { useEffect }  from 'react'
import { tokens } from "../../tamagui.config";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ForgotPasswordScreen = ({navigation}) => {
  useEffect(() => {
    // Obtenir les dimensions de l'écran
    const { width, height } = Dimensions.get('window');

    // Logger les dimensions dans la console
    console.log(`Largeur de l'écran: ${width}px`);
    console.log(`Hauteur de l'écran: ${height}px`);
    const containerWidth = wp('100%'); // Par exemple, 80% de largeur
    const containerHeight = hp('100%'); // Par exemple, 10% de hauteur
  }, []);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content"/>
      <YStack w="$responsiveContainerWidth" h="$responsiveContainerHeight" bg={tokens.color.tertiary}>
        <XStack>

        </XStack>
      </YStack>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen