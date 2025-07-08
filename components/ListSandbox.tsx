import { RootStackParamList } from "@/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useMemo, useState } from "react";
import { View } from "react-native";
import styles from "../styles/styles";
import List from "./List";

type Props = NativeStackScreenProps<RootStackParamList, 'ListHome'>;

const data = new Array(100).fill(null).map((_, index) => ({ key: index.toString(), value: `Item ${index}` }));

const filterAndSort = (text: string, asc: boolean): { key: string; value: string }[] => {
  return data
    .filter(item => text.length === 0 || item.value.includes(text))
    .sort(
      asc
        ? (a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0)
        : (a, b) => (b.value > a.value ? 1 : b.value < a.value ? -1 : 0)
    )
};

export default function ListHome({ navigation }: Props) {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");

  const parsedData = useMemo(() => {
    return filterAndSort(filter, asc);
  }, [filter, asc]);

  return (
    <View style={styles.listContainer}>
      <List 
        data={parsedData} 
        onFilter={(text) => {
          setFilter(text);
        }} 
        onSort={() => {
          setAsc(!asc);
        }} 
        asc={asc} 
      />
    </View>
  );
}
