import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  promptBanner: {
  	flex: 0.2,
  	flexDirection: 'row',
  	marginLeft: 20,
  	marginRight: 20,
  	marginTop: 15,
    alignItems: 'center',  	
    justifyContent: 'center'
  },
  prompt: {
  	flex: 0.9,
  	fontSize: 22,
  	fontWeight: 'bold'
  },
  avartar: {
    borderColor: 'black',
    borderRadius: 100,
    borderWidth: 0.25,
    height: width / 6,
    width: width / 6
  },
  overallRanking: {
  	marginTop: 15,  	
  }
});
