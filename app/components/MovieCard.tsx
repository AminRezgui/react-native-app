import React, { FC } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
interface Props {
  item: Movie;
}

const MovieCard: FC<Props> = (props) => {
  const item = props.item;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("item pressed")}
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
    width: "80%",
  },
  imageContainer: {
    marginHorizontal: 10,
  },
  textStyle: {
    color: "#fff",
  },
});

export default MovieCard;
