import styles from "@/styles/styles";
import { FlatList, Text } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
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
        renderItem={({ item }) => <Animated.View entering={SlideInLeft}><Text style={styles.listItem}>{item.value}</Text></Animated.View>}
        onEndReached={fetchItems}
        onRefresh={refreshItems}
        refreshing={isRefreshing}
      />
  );
}
