import styles from "@/styles/styles";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type ListProps = {
  data: {key: string; value: string}[];
  fetchItems: () => void;
};

export default function List({ data, fetchItems }: ListProps) {
  return (
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.value}</Text>}
        onEndReached={fetchItems}
      />
  );
}
