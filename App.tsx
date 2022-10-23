import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SearchInput from "./app/components/SearchInput";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        placeholder="Search"
        onChangeText={(text) => console.log(text)}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "center",
  },
});
