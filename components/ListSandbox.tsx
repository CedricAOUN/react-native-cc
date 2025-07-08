import { RootStackParamList } from "@/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
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

export function fetchItems(filter: string, asc: boolean): Promise<{ json: () => Promise<{ items: { key: string; value: string }[] }> }> {
  return new Promise((resolve) => {
    resolve({
      json: () =>
        Promise.resolve({
          items: filterAndSort(filter, asc)
        })
    });
  });
}

export default function ListHome({ navigation }: Props) {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [parsedData, setParsedData] = useState<{ key: string; value: string }[]>([]);

  useEffect(() => {
    fetchItems(filter, asc).then((response) => {
      response.json().then((data) => {
        setParsedData(data.items);
      });
    });
  }, [filter, asc]);

  return (
    <View style={styles.listContainer}>
      <List 
        data={parsedData} 
        onFilter={(text) => {
          fetchItems(text, asc).then((response) => response.json().then((data) => {
            setFilter(text);
            setParsedData(data.items);
          }));
        }}
        onSort={() => {
          fetchItems(filter, !asc).then((response) => response.json().then((data) => {
            setAsc(!asc);
            setParsedData(data.items);
          }));
        }}
        asc={asc} 
      />
    </View>
  );
}
