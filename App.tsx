import {TamaguiProvider, YStack} from 'tamagui'
import config from './tamagui.config';
import {tokens} from './tamagui.config'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import CustomButton from './app/components/CustomButton';






export default function App() {
  return (
    <TamaguiProvider config={config}>
      {/* <NavigationContainer>
        <AppNavigator>

        </AppNavigator>
      </NavigationContainer> */}
      <YStack w='100%' h='100%'  display='flex' jc='center'>
        
      </YStack>
    </TamaguiProvider>
  );
}

