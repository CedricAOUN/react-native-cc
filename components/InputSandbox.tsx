import { RootStackParamList } from "@/router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Switch, SwitchProps, Text, TextInput, TextInputProps, View } from "react-native";
import styles from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, 'InputSandbox'>;

type InputProps = TextInputProps & {
  label: string
}
function Input(props: InputProps) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.textInput}
      />
    </View>
  );
}

type CustomSwitchProps = SwitchProps & {
  label: string
}

function CustomSwitch( props : CustomSwitchProps) {
  return (
    <View style={styles.customSwitch}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <Switch {...props} />
    </View>
  )
}

export default function InputSandbox({ navigation }: Props) {
  const [changedText, setChangedText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [firstSwitch, setFirstSwitch] = useState(false);
  const [secondSwitch, setSecondSwitch] = useState(false);

  return (
    <View style={styles.textInputContainer}>
      <Input label="Basic Input" />
      <Input label="Password Input" secureTextEntry={true} />
      <Input label="Return Key:" returnKeyType="search" />
      <Input label="placeholder" placeholder="Type here..." />
      <Input label="Input event" 
        onChangeText={(text) => {
          console.log("Input changed:", text);
          setChangedText(text);
        }}
        onSubmitEditing={(event) => {
          setSubmittedText(event.nativeEvent.text);
        }}
        onFocus={() => { 
          setChangedText(""); 
          setSubmittedText(""); 
        }}
      />
      <Text>Changed Text: {changedText}</Text>
      <Text>Submitted Text: {submittedText}</Text>
      <CustomSwitch label="disable Next switch" value={firstSwitch} onValueChange={setFirstSwitch} disabled={secondSwitch} />
      <CustomSwitch label="disable previous switch" value={secondSwitch} onValueChange={setSecondSwitch} disabled={firstSwitch} />
    </View>
  );
}
