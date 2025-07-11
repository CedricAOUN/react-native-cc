import { RootStackParamList } from "@/router";
import styles from "@/styles/styles";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from "react-native";
type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export default function Settings({ navigation  }: Props) {

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}