import { Platform, StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'ghostwhite',
    ...Platform.select({
      ios: {
        paddingTop: 20, // iOS status bar height
      },
      android: {
        paddingTop: StatusBar.currentHeight, // Android status bar height
      },
    }),
  },
  box: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'darkslategray',
  },
  boxText: {
    color: 'darkslategray',
    fontWeight: 'bold',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  listContainer: {
    flex: 1,
    paddingTop: 10,
    flexDirection: 'column',
  },
  listItem: {
    padding: 5,
    margin: 5,
    color: 'slategray',
    backgroundColor: 'ghostwhite',
    textAlign: 'center',
  },
  controls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  filter: {
    height: 40,
    width: 200,
  },
  geoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ghostwhite',
  },
  label: {
    textAlign: 'center',
    margin: 10,
  },
  address: {
    fontWeight: 'bold',
  },
  map: {
    alignSelf: 'stretch',
    height: 300,
    margin: 10,
  },
  ipaStyles: {
    color: 'coral',
  },
  stoutStyles: {
    color: 'saddlebrown',
  },
  boldText: {
    fontWeight: 'bold',
  },
  textInputContainer: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  textInput: {
    height: 20,
    color: 'white',
    backgroundColor: 'darkslategray',
    fontSize: 11,
  },
  textInputLabel: {
    marginBottom: 4,
  },
  customSwitch: {
    alignItems: 'center',
    margin: 10,
  },
});
