import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#A69F97" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestrauntCards */}
        <RestaurantCard
          id={123}
          imgUrl="https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/16:9/w_1920,h_1080,c_limit/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg"
          title="Wow!Momo"
          rating={4.5}
          genre="Chinese"
          address="Potheri"
          short_description="Chinese Momos"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/16:9/w_1920,h_1080,c_limit/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg"
          title="Wow!Momo"
          rating={4.5}
          genre="Chinese"
          address="Potheri"
          short_description="Chinese Momos"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/16:9/w_1920,h_1080,c_limit/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg"
          title="Wow!Momo"
          rating={4.5}
          genre="Chinese"
          address="Potheri"
          short_description="Chinese Momos"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/16:9/w_1920,h_1080,c_limit/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg"
          title="Wow!Momo"
          rating={4.5}
          genre="Chinese"
          address="Potheri"
          short_description="Chinese Momos"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
