import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className="flex-row justify-between px-4 mx-2 py-2 bg-white rounded-lg mt-2 shadow"
      >
        <View>
          <Text className="font-medium text-lg mb-1">{name}</Text>
          <Text className="text-gray-600 w-56">{description}</Text>
          <Text className="text-gray-600 mt-2">
            <Currency quantity={price} currency="INR" />
          </Text>
        </View>
        <View className="flex-col items-center">
          <Image
            style={{ borderWidth: 1, borderColor: "gray" }}
            source={{ uri: urlFor(image).url() }}
            className="h-20 w-20 bg-gray-300 p-4 rounded-lg"
          />
        </View>
      </TouchableOpacity>
      {/* <View className="flex-row-reverse px-5 py-2">
        <TouchableOpacity>
          <PlusCircleIcon size={35} color="green" opacity={0.6} />
        </TouchableOpacity>
        <Text>{itemCount}</Text>
        <TouchableOpacity>
          <MinusCircleIcon size={35} color="green" opacity={0.6} />
        </TouchableOpacity>
      </View> */}

      {isPressed && (
        <View className=" px-2 mx-2 pt-1 rounded-lg my-1 shadow-sm">
          <View className="flex-row items-center justify-end space-x-2  ">
            <TouchableOpacity>
              <MinusCircleIcon size={35} opacity={0.8} />
            </TouchableOpacity>

            <Text className="text-base text-gray-500">0</Text>

            <TouchableOpacity>
              <PlusCircleIcon size={35} opacity={0.8} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
