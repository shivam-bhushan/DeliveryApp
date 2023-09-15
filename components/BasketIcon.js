import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const naviagtion = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length == 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => naviagtion.navigate("Basket")}
        className="mx-5 p-3 rounded-full flex-row items-center space-x-1 bg-[#D92344]"
      >
        <Text className="text-white font-extrabold text-lg bg-[#8C142A] py-1 px-3 rounded-full ml-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold ">
          <Currency quantity={basketTotal} currency="INR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
