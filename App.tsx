import {TamaguiProvider,} from 'tamagui'
import config from './tamagui.config';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';






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

