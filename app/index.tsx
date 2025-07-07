import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const name = "Best song ever";
  const styles = StyleSheet.create({
    container: {
      margin: 10,
      marginTop: 100,
      backgroundColor: 'orange',
      borderRadius: 5
    },
    innerContainer: {
      backgroundColor: "brown",
      height: 50,
      width: 150,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: '200',
      color: 'white',
      position: 'absolute',
      top: 12,
      left: 10,
    },
    subtitle: {
      fontWeight: 'bold'
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer} />
      <Text style={styles.title}>
        <Text style={styles.subtitle}>Playing: </Text>{name}
      </Text>
    </View>
  );
}
