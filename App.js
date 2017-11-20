import React from 'react';
import { BackHandler } from "react-native";
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { RootNavigator } from './components/Nav';

class App extends React.Component {
  componentDidMount = () => {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  } 

  onBackPress = () => {
    const { dispatch, Nav } = this.props;
    if (Nav.index === 0) {
      return false;
    }  
    dispatch(NavigationActions.back());
    return true;
  };  

  render() {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.Nav,
    });

    return (
      <RootNavigator navigation={navigation} />
    );
  }
}

const mapStateToProps = (state) => ({
  Nav: state.Nav
});

export default connect(mapStateToProps)(App);
