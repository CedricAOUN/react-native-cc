import Box from "@/components/Box";
import { View } from "react-native";
import styles from "../styles/styles";
const boxes = new Array(10).fill(null).map((v, i) => i + 1);
export default function Index() {
  return (
    <View style={styles.container}>
      {boxes.map((i) => (
        <Box key={i}>#{i}</Box>
      ))}
    </View>
  );
}
