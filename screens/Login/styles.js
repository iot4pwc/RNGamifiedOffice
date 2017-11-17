import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  logo: {
    flex: 0.3,
    height: height / 6,
    marginTop: height / 25
  },
  prompt: {
    flex: 0.2,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: width / 10,
    marginRight: width / 10,
    marginTop: height / 10,
    textAlign: 'center'
  },
  login: {
    flex: 0.5,
    marginTop: height / 25,
  }
});
