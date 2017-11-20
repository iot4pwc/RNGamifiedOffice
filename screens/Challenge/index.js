import actions from '../../actions/Challenge';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { ScrollView, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Challenge extends React.Component {
  static navigationOptions = {
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    headerRight: (<View></View>),
    title: 'Challenge'
  }

  render() {
    const { challenges, selectChallenge } = this.props;

    return (
      <ScrollView style={styles.container}>
        <List>
          {
            challenges.map((challenge, idx) => (
              <ListItem
                key={idx}
                title={challenge.challenge_name || `Challenge ${challenge.challenge_id}`}
                leftIcon={{name: 'av-timer'}}
                titleStyle={styles.title}
                onPress={() => selectChallenge(challenge.challenge_id)}
              />
            ))
          }    
        </List>
      </ScrollView>
    );
  }
}

Challenge.propTypes = {
  selectChallenge: PropTypes.func.isRequired,
  challenges: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  challenges: state.Login.challenges
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
