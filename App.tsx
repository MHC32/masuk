import {TamaguiProvider, YStack} from 'tamagui'
import config from './tamagui.config';
import {tokens} from './tamagui.config'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './app/navigation/AppNavigator';
import CustomInput from './app/components/CustomInput';






export default function App() {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <AppNavigator>

        </AppNavigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}

