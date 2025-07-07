import styles from "@/styles/styles";
import { ReactNode } from "react";
import { Text, View } from "react-native";

interface BoxProps {
  children: ReactNode;
}

export default function Box({ children }: BoxProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}