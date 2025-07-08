import { RootStackParamList } from "@/router";
import styles from "@/styles/styles";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, View } from "react-native";
import Animated, { SlideInLeft, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
type Props = NativeStackScreenProps<RootStackParamList, 'News'>;

export default function News({ navigation }: Props) {
  const radius = useSharedValue(5);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const color = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      borderRadius: radius.value,
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
      backgroundColor: `rgba(255, 0, 0, ${color.value})`,
    };
  }, []);

  const onPressIn = () => {
    radius.value = withSpring(20);
    scale.value = withSpring(0.95);
    opacity.value = withSpring(0.7);
    color.value = withSpring(0.5);
  }

  const onPressOut = () => {
    radius.value = withSpring(5);
    scale.value = withSpring(1);
    opacity.value = withSpring(1);
    color.value = withSpring(1);
  }

  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
      <Animated.View style={animatedStyles} entering={SlideInLeft}>
        <Pressable 
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Text>Press me</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}