import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
  avartar: {
    width: width,
    height: width
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  modalContainer: {
    flex: 1
  },
  scrollImage: {
    width: width / 3,
    height: width / 3
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  formField: {
    marginBottom: 25,
    marginTop: 10
  }
});
