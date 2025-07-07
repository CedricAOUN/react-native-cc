import { Platform, StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    width: 100,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'darkslategray',
    margin: 10,
  },
  boxText: {
    color: 'darkslategray',
    fontWeight: 'bold',
  },
});
