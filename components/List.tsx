import styles from "@/styles/styles";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListControls from "./ListControls";

type ListProps = {
  data: {key: string; value: string}[];
  onFilter: (filter: string) => void;
  onSort: () => void;
  asc: boolean;
};

export default function List({ data, onFilter, onSort, asc}: ListProps) {
  return (
      <FlatList
        data={data}
        ListHeaderComponent={<ListControls {...{ onFilter, onSort, asc }} />}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.value}</Text>}
      />
  );
}
