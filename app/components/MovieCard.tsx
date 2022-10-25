import React, { FC } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { appendMovies } from "../redux/actions/moviesAction";
interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
interface Props {
  navigation: any;
  item: Movie;
  key: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setMoviesList: React.Dispatch<React.SetStateAction<any>>;
}

const MovieCard = (props: Props) => {
  const dispatch = useDispatch();
  const item = props.item;
  const navigation = props.navigation;

  //handle navigation && adding pressed movie to redux store
  const handlePressMovie = (movie: Movie) => {
    navigation.navigate("details", { item: movie });
    dispatch(appendMovies(movie));
    // initialize MoviesList screen states
    props.setSearchValue("");
    props.setMoviesList([]);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handlePressMovie(item);
      }}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.Poster, width: 64, height: 64 }} />
      </View>

      <View>
        <Text style={styles.textStyle}>{item.Title}</Text>
        <Text style={styles.textStyle}>{item.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#323232",
    borderRadius: 5,
    marginVertical: 10,
  },
  imageContainer: {
    marginHorizontal: 10,
  },
  textStyle: {
    color: "#fff",
  },
});

export default MovieCard;
