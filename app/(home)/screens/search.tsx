import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import SearchInput from "../../../components/ui/SearchInput";
import MoviesSuggestion from "../../../components/MoviesSuggestion";
import fetchApiRequest from "../../../api/request";
import appMovieRequest from "../../../api/appRequest";
import LoadingIndicator from "../../../components/ui/LoadingIndicator";
const search = () => {
  const isPresented = router.canGoBack();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  useEffect(() => {
    async function fetchMovie() {
      if (searchValue) {
        setIsLoading(true);

        try {
          const resData = await fetchApiRequest(
            appMovieRequest.searchMovie + `?query=${searchValue}`
          );

          console.log(resData);

          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
        }
      }
    }

    fetchMovie();
  }, [searchValue]);

  return (
    <View style={{ flex: 1, gap: 10, backgroundColor: "#000" }}>
      <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
        <Pressable onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </Pressable>
      </View>

      <SearchInput searchHandler={handleSearch} />

      {isLoading ? (
        <LoadingIndicator title={`recherche de ${searchValue} en cours...`} />
      ) : (
        <MoviesSuggestion />
      )}
      {isPresented && <Link href="../">Fermer</Link>}
      <StatusBar style="dark" />
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});
