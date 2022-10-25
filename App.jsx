import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./app/redux/store";
import SearchResultsScreen from "./app/screens/SearchResultScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./app/screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="movies list">
          <Stack.Screen
            name="movies list"
            component={SearchResultsScreen}
          ></Stack.Screen>
          <Stack.Screen name="details" component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
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
