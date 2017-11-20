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
import { Image, Modal, ScrollView, Text, View } from 'react-native';

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

  constructor(props) {
    super(props);
    this.state = {
      isActivityModalOn: false,
      isRankModalOn: false
    };
  }

  componentWillMount = () => {
    const { fetchRanking, fetchActivity } = this.props;
    fetchRanking();
    fetchActivity(); 
  }

  _toggleModal = (modal) => {
    return () => {
      if (modal === 'rank') {
        this.setState({
          ...this.state,
          isRankModalOn: !this.state.isRankModalOn
        });
      } else {
        this.setState({
          ...this.state,
          isActivityModalOn: !this.state.isActivityModalOn
        });        
      }
    }
  }

  render() {
    const { name } = this.props
    const { navigate, personalRank, totalRank, recentActivity } = this.props;
    const percentage = 1 - personalRank.rank / totalRank.length;
    // TODO: modify to accomodate all score

    return (
      <View style={styles.container}>
        <View style={styles.promptBanner}>
          <Text style={styles.prompt}>
            {name ? `Hello ${name}!`: 'Hey there!'}
          </Text>
          <Image
            resizeMode="cover"
            style={styles.avartar}
            source={{uri: this.props.profileImage}}
          />
        </View>
        <View style={styles.overallRanking}>
          <Tile
            caption='Click to see the full ranks'
            featured
            imageSrc={{uri: Ranking}}
            onPress={this._toggleModal('rank')}
            title={`You've beaten ${percentage * 100}% of your friends!`}
          />
          <Tile
            caption='Click to see the full activities'
            featured
            imageSrc={{uri: Activities}}
            onPress={this._toggleModal('activity')}
            style={styles.overallRanking}
            title={
              `Today's total score: ${recentActivity.total_score}\nWater intake score: ${recentActivity.water_intake_score}\nSitting score: ${recentActivity.sitting_score}`
            }
          />        
        </View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.isRankModalOn}
          onRequestClose={this._toggleModal('rank')}
        >
        </Modal>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.isActivityModalOn}
          onRequestClose={this._toggleModal('activity')}
        >
        </Modal>        
      </View>
    );
  }
}

Status.propTypes = {
  fetchActivity: PropTypes.func.isRequired,
  fetchRanking: PropTypes.func.isRequired,
  fullActivities: PropTypes.object.isRequired,
  name: PropTypes.string,
  navigate: PropTypes.func.isRequired,
  personalRank: PropTypes.object.isRequired,
  profileImage: PropTypes.string.isRequired,
  recentActivity: PropTypes.object.isRequired,
  totalRank: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  ...state.Status,
  ...state.Profile
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Status);
