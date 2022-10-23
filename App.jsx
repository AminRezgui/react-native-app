import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import SearchResultsScreen from "./app/screens/MoviesList";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <SearchResultsScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
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
