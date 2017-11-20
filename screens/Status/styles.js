import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  promptBanner: {
  	flex: 0.07,
  	flexDirection: 'row',
  	marginLeft: 20,
  	marginRight: 20,
  	marginTop: 15,
    alignItems: 'center',  	
    justifyContent: 'center'
  },
  prompt: {
  	flex: 0.8,
  	fontSize: 22,
  	fontWeight: 'bold'
  },
  avartar: {
    borderColor: 'black',
    borderRadius: 100,
    flex: 0.2,
    height: width / 6,
    width: width / 6
  },
  overallRanking: {
  	flex: 0.93,
  	marginTop: 15,
  },
  rankingHeader: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 0.1,
    justifyContent: 'center',
    paddingBottom: 15,
    paddingTop: 15
  },
  activitiesHeader: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 0.1,
    justifyContent: 'center',
    paddingBottom: 15,
    paddingTop: 15
  },  
  headerText: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold'
  },
  rankingContent: {
    backgroundColor: 'powderblue',
    marginTop: 10
  },
  activitiesContent: {
    backgroundColor: 'mistyrose',
    marginTop: 10  
  },
  rankingContainer: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  activitiesContainer: {
    flex: 1,
    backgroundColor: 'mistyrose',
  },
  column: {
    fontWeight:'bold',
    fontSize: 18,
    color: 'white',
    paddingBottom: 10
  },
  columnHeader: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    height: 3,
  },
  columnContainer: {
    flex: 0.333,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableContainer: {
    flex: 0.9,
    paddingTop: 10
  }
});
