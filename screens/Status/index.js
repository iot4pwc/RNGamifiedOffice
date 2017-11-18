import Activities from '../../constants/Activities';
import Ranking from '../../constants/Ranking';
import actions from '../../actions/Status';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles'
import { Tile } from 'react-native-elements';
import { Image, ScrollView, Text, View } from 'react-native';

class Status extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'STATUS',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.promptBanner}>
          <Text style={styles.prompt}>
            {`Hello ${this.props.name}!`}
          </Text>
          <Image
            resizeMode="cover"
            style={styles.avartar}
            source={{uri: this.props.profileImage}}
          />
        </View>
        <Tile
           imageSrc={{uri: Ranking}}
           title="Click to see your result"
        />
        <Tile
           imageSrc={{uri: Activities}}
           title="Click to see your result"
        />
      </ScrollView>
    );
  }
}

Status.propTypes = {
  name: PropTypes.string,
  profileImage: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  ...state.Profile
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Status);
