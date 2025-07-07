import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
          style={{ 
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
      >
        <Text>Hello World from Cloud Campus student</Text>
      </View>
    </ScrollView>
  );
}
