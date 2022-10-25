import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import SearchInput from "../components/SearchInput";
import MoviesList from "../components/MoviesList";

const SearchResultsScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const lastMovies = useSelector((state) => state.moviesReducer.moviesList);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=f2b12986&s=${searchValue}`)
      .then((response) => {
        setMoviesList(response.data.Search);
      });
  }, [searchValue]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        style={{ width: "100%" }}
        placeholder="Search"
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
      />
      <MoviesList
        navigation={navigation}
        moviesList={moviesList}
        lastMovies={lastMovies}
        setSearchValue={setSearchValue}
        setMoviesList={setMoviesList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    width: "100%",
    padding: 40,
  },
});

export default SearchResultsScreen;
