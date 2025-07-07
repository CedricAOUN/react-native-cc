import { Platform, StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignSelf: 'stretch',
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
});
