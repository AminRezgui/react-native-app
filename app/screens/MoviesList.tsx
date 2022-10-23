import React, { FC, useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import MovieCard from "../components/MovieCard";
import SearchInput from "../components/SearchInput";
const moviesList = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    Title: "Spider-Man",
    Type: "movie",
    Year: "2002",
    imdbID: "tt0145487",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    Title: "Spider-Man: No Way Home",
    Type: "movie",
    Year: "2021",
    imdbID: "tt10872600",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    Title: "The Amazing Spider-Man",
    Type: "movie",
    Year: "2012",
    imdbID: "tt0948470",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
    Title: "Spider-Man: Homecoming",
    Type: "movie",
    Year: "2017",
    imdbID: "tt2250912",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Spider-Man 2",
    Type: "movie",
    Year: "2004",
    imdbID: "tt0316654",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    Title: "Spider-Man 3",
    Type: "movie",
    Year: "2007",
    imdbID: "tt0413300",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
    Title: "Spider-Man: Into the Spider-Verse",
    Type: "movie",
    Year: "2018",
    imdbID: "tt4633694",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg",
    Title: "The Amazing Spider-Man 2",
    Type: "movie",
    Year: "2014",
    imdbID: "tt1872181",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    Title: "Spider-Man: Far from Home",
    Type: "movie",
    Year: "2019",
    imdbID: "tt6320628",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTVlY2VhMWEtYmRlOC00YWVhLWEzMDktZWJlYzNiMWJmZTIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Title: "Along Came a Spider",
    Type: "movie",
    Year: "2001",
    imdbID: "tt0164334",
  },
];
const SearchResultsScreen: FC = () => {
  const [searchValue, setSearchValue] = useState<string | null>("");
  console.log(searchValue);
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        placeholder="Search"
        onChangeText={(text) => setSearchValue(text)}
      />
      <ScrollView style={styles.list}>
        {moviesList.map((el) => (
          <MovieCard item={el} key={el.imdbID} />
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
