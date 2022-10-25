import React, { FC } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchInput: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={props.placeholder}
          placeholderTextColor={"#6B6B6B"}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
      <View>
        <Ionicons name="md-search" color="#6B6B6B" size={22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#323232",
    borderRadius: 5,
    height: 50,
    padding: 10,
  },
  textInput: {
    color: "#6B6B6B",
  },
});

export default SearchInput;
