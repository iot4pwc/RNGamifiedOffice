import Activities from '../../constants/Activities';
import Ranking from '../../constants/Ranking';
import actions from '../../actions/Status';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles'
import { Divider, Tile } from 'react-native-elements';
import { Image, Modal, ScrollView, Text, View } from 'react-native';
import {
  ActivitiesBreakdown,
  ActivitiesAttrList,
  ActivitiesDisplayNameMap,
  RankingAttrList,
  RankingDisplayNameMap,
  ScoreDisplayNameMap
} from '../../constants/Common';

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

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.isThisScreenOn !== this.props.isThisScreenOn) {
      const { fetchRanking, fetchActivity } = this.props;
      fetchRanking();
      fetchActivity();
    }
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

  _getScoreSummary = (currentActivity) => {
    const summary = ActivitiesBreakdown.reduce((ret, activity) => {
      return ret + ScoreDisplayNameMap[activity] + `: ${parseFloat(currentActivity[activity]).toFixed(2)}\n`;
    }, '');

    return summary;
  }

  render() {
    const { name } = this.props
    const {
      fullActivities,
      navigate,
      personalRank,
      totalRank,
      recentActivity
    } = this.props;
    const percentage = (1 - personalRank.rank / totalRank.length).toFixed(2);
    const sortedRank = totalRank.slice().sort((a, b) => a.rank - b.rank);

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
            title={`Today:\n${this._getScoreSummary(recentActivity)}`}
          />        
        </View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.isRankModalOn}
          onRequestClose={this._toggleModal('rank')}
        >
          <ScrollView style={styles.rankingContainer}>
            <View style={styles.rankingContent}>
              <View style={styles.columnHeader}>
                {
                  RankingAttrList.map((attr, idx) => (
                    <View key={idx} style={styles.columnContainer}>
                      <Text style={styles.column}>
                        {RankingDisplayNameMap[attr]}
                      </Text>
                    </View>                    
                  ))
                }
              </View>
              <Divider style={styles.divider} />
              <View style={styles.tableContainer}>
              {
                sortedRank.map((entry, idx) => {
                  return (
                    <View key={idx} style={styles.columnHeader}>
                      {
                        RankingAttrList.map((attr, idx) => (
                          <View key={attr + idx} style={styles.columnContainer}>
                            <Text style={styles.column}>
                              {entry[attr]}
                            </Text>
                          </View>
                        ))
                      }
                    </View>
                  );
                })
              }
              </View>
            </View>
          </ScrollView>
        </Modal>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.isActivityModalOn}
          onRequestClose={this._toggleModal('activity')}
        >
          <ScrollView style={styles.activitiesContainer}>
            <View style={styles.activitiesContent}>
              {
                ActivitiesAttrList.map((period, idx) => Object.keys(fullActivities).length !== 0 && (
                  <View key={idx} style={styles.activityContainer}>
                    <Text style={styles.activityText}>
                      {`${ActivitiesDisplayNameMap[period]}:\n${this._getScoreSummary(fullActivities[period])}`}
                    </Text>
                  </View>
                ))
              }
            </View>
          </ScrollView>        
        </Modal>        
      </View>
    );
  }
}

Status.propTypes = {
  isThisScreenOn: PropTypes.bool.isRequired,
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
  ...state.Profile,
  isThisScreenOn: state.Nav.index === 2 && state.Nav.routes[2].index === 0
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Status);
