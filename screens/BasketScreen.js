import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-gray-300 shadow">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-5 right-5"
          >
            <XCircleIcon size={45} color="gray" />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/34/0c/6a/340c6add7519212185a08d4205eb1965.jpg",
            }}
            className="h-10 w-10  p-4 rounded-full"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
