import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MovieCard from "./app/components/MovieCard";
import SearchInput from "./app/components/SearchInput";

export default function App() {
  const item = {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    Title: "Spider-Man",
    Type: "movie",
    Year: "2002",
    imdbID: "tt0145487",
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        placeholder="Search"
        onChangeText={(text) => console.log(text)}
      />
      <MovieCard item={item} />
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
