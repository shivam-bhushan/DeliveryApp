import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const RestaurantScreen = () => {
  const naviagtion = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    naviagtion.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View>
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-3"
        />
        <TouchableOpacity
          onPress={naviagtion.goBack}
          className="absolute top-14 left-5 bg-gray-100 rounded-full p-3"
        >
          <ArrowLeftIcon size={20} color="#F2594B" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
