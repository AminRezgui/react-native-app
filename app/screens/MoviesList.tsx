import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { appendMovies } from "../redux/actions/moviesAction";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import MovieCard from "../components/MovieCard";
import SearchInput from "../components/SearchInput";

interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const SearchResultsScreen: FC = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string | null>("");
  const [moviesList, setMoviesList] = useState<Movie[]>();

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=f2b12986&s=${searchValue}`)
      .then((response) => {
        setMoviesList(response.data.Search);
        dispatch(appendMovies(response.data.Search));
      });
  }, [searchValue]);

  console.log(searchValue);
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        placeholder="Search"
        onChangeText={(text) => setSearchValue(text)}
      />
      <ScrollView style={styles.list}>
        {!!moviesList &&
          moviesList.map((el) => <MovieCard item={el} key={el.imdbID} />)}
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
