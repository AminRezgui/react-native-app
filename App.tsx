import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import SearchResultsScreen from "./app/screens/MoviesList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchResultsScreen />
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
    padding: 40,
  },
});
