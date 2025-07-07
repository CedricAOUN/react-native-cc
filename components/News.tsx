import { RootStackParamList } from "@/router";
import styles from "@/styles/styles";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from "react-native";
type Props = NativeStackScreenProps<RootStackParamList, 'News'>;

export default function News({ navigation }: Props) {

  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
    </View>
  );
}