import { fetchItems } from "@/api/api";
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

export default function ListHome({ navigation }: Props) {
  const [parsedData, setParsedData] = useState<{ key: string; value: string }[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // re-format generated items to { key: string; value: string }
  const formatItems = (items: any[]): { key: string; value: string }[] => {
    return items.filter((item: any): item is { key: string; value: string } => 
      item && typeof item.key === 'string' && typeof item.value === 'string'
    );
  };

  function retrieveItems() {
    return fetchItems({ refresh: false })
      .then(response => response.json())
      .then(({ items }) => {
        const validItems = formatItems(items);
        setParsedData(prevData => [
          ...prevData,
          ...validItems
        ]);
      });
  }
  
  function refreshItems() {
    setIsRefreshing(true);
    return fetchItems({ refresh: true })
      .then(response => response.json())
      .then(({ items }) => {
        const validItems = formatItems(items);
        setParsedData(validItems);
      })
      .finally(() => {
        setIsRefreshing(false);
      });
  }

  useEffect(() => {
    retrieveItems()
  }, []);

  return (
    <View style={styles.listContainer}>
      <List 
        data={parsedData} 
        fetchItems={retrieveItems}
        refreshItems={refreshItems}
        isRefreshing={isRefreshing}
      />
    </View>
  );
}
