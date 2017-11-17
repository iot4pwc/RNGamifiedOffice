import actions from '../../actions/Login';
import AnchorButton from '../../components/AnchorButton';
import { bindActionCreators } from 'redux';
import { CheckBox } from 'react-native-elements';
import { CHECKIN_COLOR } from '../../constants/Common';
import { connect } from 'react-redux';
import Logo from '../../constants/Logo';
import ProfileForm from '../../components/ProfileForm';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { Button, Image, ScrollView, Text, View } from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passWord: '',
      userName: '',
      checked: false
    };
  }

  formRefs = {};

  componentWillMount = () => {
    const { fetchUserInfo } = this.props;
    
    const userInfoP = fetchUserInfo();
    userInfoP.then(userInfo => {
      this.setState({
        ...this.state,
        userName: userInfo.userName,
        passWord: userInfo.passWord
      });
    });
  }  

  _isLoginEnabled = () => {
    const { passWord, userName } = this.state;

    return passWord && userName ? true : false;
  }

  _updateText = (key, text) => {
    let obj = {};
    obj[key] = text;
    this.setState({
      ...this.state,
      ...obj
    })
  }

  _handleCheck = () => {
    this.setState({
      ...this.state,
      checked: !this.state.checked
    });
  }

  _login = () => {
    const { login } = this.props;
    const { passWord, userName, checked } = this.state;

    login(userName, passWord, checked);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.9}}>
          <Image
            resizeMode='contain'
            source={{uri: Logo}}
            style={styles.logo}
          />
          <Text style={styles.prompt}>
            Let's get you back in the game! But first, please login...
          </Text>
          <View style={styles.login}>
            <ProfileForm
              content={this.state['userName']}
              header={'USER NAME'}
              key={'userName'}
              onChangeText={(newContent) => this._updateText('userName', newContent)}
              onSubmitEditing={() => this.formRefs[1].focus()}
              refFunc={(ref) => {this.formRefs[0] = ref}}
            />
            <ProfileForm
              content={this.state['passWord']}
              header={'PASSWORD'}
              key={'passWord'}
              onChangeText={(newContent) => this._updateText('passWord', newContent)}
              secureTextEntry={true}
              refFunc={(ref) => {this.formRefs[1] = ref}}
            />
            <CheckBox
              title='REMEMBER ME?'
              textStyle={styles.checkboxText}
              containerStyle={styles.checkboxBorder}
              checked={this.state.checked}
              onPress={this._handleCheck}
            />
          </View>
        </View>
        <View style={{flex: 0.1}}>    
          <Button
            onPress={this._login}
            title="LOG IN"
            color={CHECKIN_COLOR}
            disabled={!this._isLoginEnabled()}
          />                
        </View>        
      </View>
    );
  }
}

Login.propTypes = {
  fetchUserInfo: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Login);
