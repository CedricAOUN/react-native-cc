import { RootStackParamList } from "@/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import styles from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen</Text>
    </View>
  );
}
