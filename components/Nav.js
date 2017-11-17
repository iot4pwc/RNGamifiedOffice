import Status from '../screens/Status';
import Timeline from '../screens/Timeline';
import Ranking from '../screens/Ranking';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import { StackNavigator, TabNavigator } from 'react-navigation';

stackNavigator = StackNavigator({
  Status: {
    screen: Status,
    navigationOptions: {
      header: null
    }    
  },
  Ranking: {
    screen: Ranking
  },
  Timeline: {
    screen: Timeline
  },  
});

tabNavigator = TabNavigator({
  Home: {
    screen: stackNavigator,
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
  Game: {
      screen: tabNavigator,
      navigationOptions: {
        header: null
      }
  }  
}, {
    headerMode: 'screen',
});
