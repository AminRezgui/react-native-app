import axios from "axios";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DetailsScreen = ({ route, navigation }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const item = route.params.item;
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=f2b12986&i=${item.imdbID}`)
      .then((response) => {
        setMovieDetails(response.data);
      });
  }, []);

  return (
    <>
      {!!movieDetails && (
        <View style={styles.container}>
          <Image
            source={{ uri: movieDetails.Poster, width: "100%", height: "50%" }}
          />
          <View style={styles.details}>
            <View style={styles.infos}>
              <Text style={styles.title}>{movieDetails.Title}</Text>
              <View style={styles.rate}>
                <Text style={styles.text}>
                  {movieDetails?.Ratings[0]?.Value || "N/A"}
                </Text>
                <Ionicons name="star" color="#F1C40F" size={22} />
              </View>
            </View>

            <View style={styles.infos}>
              <Text style={styles.text}>
                {movieDetails.Year + " | by " + movieDetails.Director}
              </Text>
            </View>

            <Text style={styles.text}>{movieDetails.Genre}</Text>
            <Text style={styles.text}>{movieDetails.Runtime}</Text>
            <Text style={styles.plot}>{movieDetails.Plot}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },
  header: { paddingLeft: 10 },
  details: { flex: 1, marginHorizontal: 30 },
  infos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rate: { display: "flex", flexDirection: "row" },
  title: {
    fontSize: 32,
    color: "#fff",
    marginVertical: 5,
    maxWidth: "80%",
  },
  plot: {
    fontSize: 16,
    color: "#fff",
    marginTop: 50,
  },
  text: { color: "#fff" },
});
