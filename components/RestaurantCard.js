import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow rounded-md">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-md" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="#F2594B" opacity={0.5} size={22} />
          <Text className="text-slate-400">
            <Text className="text-red-400	">{rating}</Text> • {genre}
          </Text>
        </View>
        <View className="flex-row items-center pt-1 space-x-1">
          <MapPinIcon color="#F2594B" opacity={0.5} size={22} />
          <Text className="text-slate-400">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
