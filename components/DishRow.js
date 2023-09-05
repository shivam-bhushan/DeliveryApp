import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity className="flex-row justify-between px-4 py-3 bg-white rounded-lg my-1">
      <View>
        <Text className="font-medium text-lg mb-1">{name}</Text>
        <Text className="text-gray-600 w-56">{description}</Text>
        <Text className="text-gray-600 mt-2">
          <Currency quantity={price} currency="INR" />
        </Text>
      </View>
      <View>
        <Image
          style={{ borderWidth: 1, borderColor: "#F2594B" }}
          source={{ uri: urlFor(image).url() }}
          className="h-20 w-20 bg-gray-300 p-4 rounded-lg"
        />
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
