import { RootStackParamList } from "@/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import * as Progress from 'react-native-progress';
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from 'react-native-root-toast';
import styles from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen</Text>
      <Progress.Circle progress={0.5} />
      <RootSiblingParent>
        <Text onPress={() => {
          Toast.show("Hello World");
        }}>Show Notification</Text>
      </RootSiblingParent>
    </View>
  );
}
