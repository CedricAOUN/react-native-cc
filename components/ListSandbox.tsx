import { RootStackParamList } from "@/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Text, View } from "react-native";
import styles from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, 'ListHome'>;

const data = new Array(100).fill(null).map((_, index) => ({ key: index.toString(), value: `Item ${index + 1}` }));

export default function ListHome({ navigation }: Props) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.value}</Text>}
      />
    </View>
  );
}
