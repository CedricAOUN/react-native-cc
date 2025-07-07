import { RootStackParamList } from "@/router";
import styles from "@/styles/styles";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export default function Settings({ navigation, route }: Props) {
  const { username } = route.params;
  
  useEffect(() => {
    navigation.setOptions({
      title: `Settings for ${username}`
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Settings Screen for: {username}</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}