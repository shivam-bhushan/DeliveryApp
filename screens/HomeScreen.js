import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  ScrollViewBase,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories.js";
import FeaturedRow from "../components/FeaturedRow.js";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerShown: false,
      },
      []
    );
  });
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row pb-4 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/34/0c/6a/340c6add7519212185a08d4205eb1965.jpg",
          }}
          className="h-7 w-7 bg-gray-300 p-6 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon color="#F2594B" size={20} />
          </Text>
        </View>
        <UserIcon size={27} color="#F2594B" />
      </View>

      {/* SearchBar */}
      <View className="flex-row items-center mx-4 pb-4 space-x-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2 rounded-lg">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restraunts and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#A69F97" />
      </View>

      {/* Body */}

      {/* Scroll View */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Row */}

        {/* Offers */}
        <FeaturedRow
          id="12"
          title="Offers near you!"
          description="Delicious and local"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
