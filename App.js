import React, { useState } from 'react';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './routes/homeStack';
import AboutStack from './routes/aboutStack';
import DrawerStack from './routes/drawerStack';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
  });
}

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
      return (
        // <HomeStack/>
        // <AboutStack/>
        <DrawerStack/>
      );
  } else{
   return (
     <AppLoading 
    startAsync={getFonts}
    onFinish={() => setFontsLoaded(true)}
    onError={console.warn}
    />
   )
  }
}

export default App;


// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);
//   if(fontsLoaded){
//       return (
//         <Home/>
//       );
//   } else{
//    return (
//      <AppLoading 
//     startAsync={getFonts}
//     onFinish={() => setFontsLoaded(true)}
//     onError={console.warn}
//     />
//    )
//   }
 
// }
// In App.js in a new project
