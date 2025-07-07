import Box from "@/components/Box";
import { View } from "react-native";
import styles from "../styles/styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Box>#1</Box>
      <Box>#2</Box>
      <Box>#3</Box>
    </View>
  );
}
