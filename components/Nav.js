import Challenge from '../screens/Challenge';
import Status from '../screens/Status';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import { StackNavigator, TabNavigator } from 'react-navigation';

tabNavigator = TabNavigator({
  Home: {
    screen: Status,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile,
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'black',
    showIcon: true,
    style: {
        backgroundColor: 'white',
    }
  },
});

export const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Challenge: {
    screen: Challenge
  },
  Game: {
    screen: tabNavigator,
    navigationOptions: {
      header: null
    }
  }  
}, {
    headerMode: 'screen',
});
