import React, { FC } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const MovieCard = (props) => {
  const item = props.item;
  const navigation = props.navigation;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("details", { item: item })}
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
