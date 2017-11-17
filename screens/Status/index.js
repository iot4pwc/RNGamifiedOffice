import actions from '../../actions/Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles'
import { ScrollView, Text, View } from 'react-native';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login
        </Text>
      </View>
    );
  }
}

Login.propTypes = {

}

const mapStateToProps = (state) => ({
  ...state.Login
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
