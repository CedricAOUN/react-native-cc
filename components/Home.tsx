import { RootStackParamList } from "@/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import styles from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen</Text>
      <Button title="Go to Settings for John Doe" onPress={() => navigation.navigate('Settings', { username: 'John Doe' })} />
      <Button title="Go to Settings for Jane Smith" onPress={() => navigation.navigate('Settings', { username: 'Jane Smith' })} />
      <Button title="Go to Settings for Alex Johnson" onPress={() => navigation.navigate('Settings', { username: 'Alex Johnson' })} />
    </View>
  );
}
