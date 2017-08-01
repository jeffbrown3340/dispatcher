import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen/HomeScreen.native';
import SplashScreen from './src/components/SplashScreen/SplashScreen.native';
import UserDetails from './src/components/UserDetails/UserDetails.native';
import RepLoginScreen from './src/components/RepLoginScreen/RepLoginScreen.native';
import ServiceReqsViewSelect from './src/components/ServiceReqsViewSelect/ServiceReqsViewSelect.native';

export default App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    UserMobile: { screen: UserDetails },
    RepLoginScreen: { screen: RepLoginScreen },
    ServiceReqsViewSelect: {screen: ServiceReqsViewSelect},
    Splash: { screen: SplashScreen }
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'screen',
    navigationOptions: {
      title: 'dispatcher 1.28',
      headerStyle: {
        height: 65,
        backgroundColor: '#2180C0',
        marginBottom: 5,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        paddingTop: 10
      },
      headerTitleStyle: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 12,
        fontWeight: 'bold',
        color: 'white'
      }
    }
  }
);

AppRegistry.registerComponent('dispatcher', () => App);

/**
 * https://stackoverflow.com/questions/34329715/how-to-add-icons-to-react-native-app
 */
