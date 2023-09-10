import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";

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
          <ArrowLeftIcon size={20} color="red" opacity={0.6} />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="font-bold text-3xl">{title}</Text>
          <View className="flex-row items-center space-x-1 pt-1">
            <StarIcon color="#F2594B" />
            <Text className="text-gray-500 text-sm">
              <Text className="text-red-500">{rating}</Text> • {genre}
            </Text>
            <View className="flex-row items-center space-x-1 pl-1">
              <MapPinIcon color="gray" opacity={0.5} />
              <Text className="text-gray-500 text-sm">{address}</Text>
            </View>
          </View>
          <View className="pt-3 pb-3">
            <Text className="text-gray-500 text-sm font-normal">
              {short_description}
            </Text>
          </View>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-3 border-y border-gray-200">
          <QuestionMarkCircleIcon color="gray" opacity={0.4} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="gray" opacity={0.4} />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="px-4 pt-4 mb-3 font-bold text-2xl">Menu</Text>

        {/* Dish Row */}
        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
