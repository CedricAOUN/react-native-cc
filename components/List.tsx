import styles from "@/styles/styles";
import { FlatList, Text } from "react-native";

type ListProps = {
  data: {key: string; value: string}[];
  fetchItems: () => Promise<void>;
  refreshItems: () => Promise<void>;
  isRefreshing: boolean;
};

export default function List({ data, fetchItems, refreshItems, isRefreshing }: ListProps) {
  return (
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.value}</Text>}
        onEndReached={fetchItems}
        onRefresh={refreshItems}
        refreshing={isRefreshing}
      />
  );
}
