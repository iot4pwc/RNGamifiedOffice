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
    flex: 0.1,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: width / 10,
    marginRight: width / 10,
    marginTop: height / 10,
    textAlign: 'center'
  },
  login: {
    flex: 0.6,
    marginTop: height / 25,
  },
  checkboxText: {
    color: '#86939e',
    fontSize: 16
  },
  checkboxBorder: {
    borderColor: 'transparent'
  }
});
