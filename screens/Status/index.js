import actions from '../../actions/Status';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles'
import { ScrollView, Text, View } from 'react-native';

class Status extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Status
        </Text>
      </View>
    );
  }
}

Status.propTypes = {

}

const mapStateToProps = (state) => ({
  ...state.Status
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Status);
