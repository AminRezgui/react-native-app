import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import MovieCard from "./MovieCard";
interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
interface Props {
  navigation: any;
  moviesList: Movie[];
  lastMovies: Movie[];
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setMoviesList: React.Dispatch<React.SetStateAction<any>>;
}

const MoviesList = (props: Props) => {
  const navigation = props.navigation;
  return (
    <ScrollView style={styles.list}>
      {!!props.moviesList ? (
        props.moviesList.map((el: Movie) => (
          <MovieCard
            navigation={navigation}
            item={el}
            key={el.imdbID}
            setSearchValue={props.setSearchValue}
            setMoviesList={props.setMoviesList}
          />
        ))
      ) : (
        <>
          <Text style={{ color: "white" }}>Last seen movies</Text>
          {props.lastMovies.map((el) => (
            <MovieCard
              navigation={navigation}
              item={el}
              key={el.imdbID}
              setSearchValue={props.setSearchValue}
              setMoviesList={props.setMoviesList}
            />
          ))}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

export default MoviesList;
