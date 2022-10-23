import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { appendMovies } from "../redux/actions/moviesAction";
import { StyleSheet, ScrollView, SafeAreaView, Button } from "react-native";
import MovieCard from "../components/MovieCard";
import SearchInput from "../components/SearchInput";

const SearchResultsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [moviesList, setMoviesList] = useState();

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=f2b12986&s=${searchValue}`)
      .then((response) => {
        setMoviesList(response.data.Search);
        //dispatch(appendMovies(response.data.Search));
      });
  }, [searchValue]);

  console.log(searchValue);
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        placeholder="Search"
        onChangeText={(text) => setSearchValue(text)}
      />
      {/* <Button onPress={() => navigation.navigate("details")} title="go back" /> */}
      <ScrollView style={styles.list}>
        {!!moviesList &&
          moviesList.map((el) => (
            <MovieCard navigation={navigation} item={el} key={el.imdbID} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    width: "100%",
  },
  list: {
    marginTop: 20,
  },
});

export default SearchResultsScreen;
