import actions from '../../actions/Profile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { encodeImage } from '../../lib/ImageEncoder';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileForm from '../../components/ProfileForm';
import ProfileHolder from '../../constants/ProfileHolder';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles'
import {
  Button,
  CameraRoll,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {
  CHECKIN_COLOR,
  DBProfileAttrMap,
  PHOTO_NUM,
  ProfileAttributesList,
  ProfilePlaceholderMap,
  KeyboardTypeMap
} from '../../constants/Common';

class Profile extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'PROFILE',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-person' : 'ios-person-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }

  constructor(props) {
    super(props);
    this.state = {
      age: '',
      alias: '',
      email: '',
      isModalVisible: false,
      name: '',
      photos: [],
      profileImage: ProfileHolder
    };
  }

  formRefs = {};

  componentWillMount = () => {
    this.props.fetchProfile();
    this._getPhotos();
  }

  componentWillReceiveProps = (nextProps) => {
    const { isThisTabClosed, updateAllProfile } = nextProps;
    const isThisTabPreviouslyClosed = this.props.isThisTabClosed;

    if (!isThisTabPreviouslyClosed === true && isThisTabClosed) {
      const { age, alias, email, name, profileImage } = this.state;
      const profile = {
        age,
        alias,
        email,
        name,
        profileImage
      };

      updateAllProfile(profile);
    } else {
      this.setState({
        ...this.props
      });      
    }
  }

  _toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    });
  }

  _handleProfileChange = (key, newContent) => {
    let obj = {};
    obj[key] = newContent;

    this.setState({
      ...this.state,
      ...obj
    })
  }

  _handleSelectPhoto = (contentUri) => {
    return () => {
      const { updateOneProfileAttr, toggleModal } = this.props;

      encodeImage(contentUri).then(uri => {
        this.setState({
          profileImage: uri
        });
        this._toggleModal();     
      });
    }
  }

  _getPhotos = () => {
    CameraRoll.getPhotos({
      first: PHOTO_NUM,
      assetType: 'Photos'
    }).then(r => {this.setState({ photos: r.edges })});
  }

  render() {
    const { isModalVisible, photos, profileImage } = this.state;

    return (
      <ScrollView style={styles.container}>
        <TouchableHighlight onPress={this._toggleModal}>
          <Image
            resizeMode="cover"
            style={styles.avartar}
            source={{uri: profileImage}}
          />
        </TouchableHighlight>
        <View style={styles.formField}>
          {
            ProfileAttributesList.map((key, idx) => {
              return (
                <ProfileForm
                  key={idx}
                  refFunc={(ref) => {this.formRefs[idx] = ref}}
                  header={DBProfileAttrMap[key]}
                  content={this.state[key]}
                  keyboardType={KeyboardTypeMap[key]}
                  placeholder={ProfilePlaceholderMap[key]}
                  onChangeText={(newContent) => this._handleProfileChange(key, newContent)}
                  onSubmitEditing={() => idx < ProfileAttributesList.length - 1 && this.formRefs[idx + 1].focus()}
                />
              );
            })
          }
        </View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={isModalVisible}
          onRequestClose={this._toggleModal}
        >
          <View style={styles.modalContainer}>          
            <Button
              title='Close'
              onPress={this._toggleModal}
              color={CHECKIN_COLOR}
            />
            <ScrollView contentContainerStyle={styles.scrollView}>
              {
                photos.map((photo, idx) => {
                  return (
                    <TouchableHighlight
                      onPress={this._handleSelectPhoto(photo.node.image.uri)}
                      key={idx}
                    >
                      <Image
                        style={styles.scrollImage}
                        source={{uri: photo.node.image.uri}}
                      />
                    </TouchableHighlight>              
                  );
                })
              }
            </ScrollView>            
          </View>
        </Modal>        
      </ScrollView>
    );
  }
}

Profile.propTypes = {
  updateAllProfile: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  isThisTabClosed: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  ...state.Profile,
  isThisTabClosed: state.Nav.index === 2 && state.Nav.routes[2].index !== 1
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
