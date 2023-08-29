import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}

      <CategoryCard
        imgUrl="https://img.freepik.com/premium-vector/appetizing-fast-food-vector-illustration-isolated-dark-background-saos-extra_701683-31.jpg"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-vector/appetizing-fast-food-vector-illustration-isolated-dark-background-saos-extra_701683-31.jpg"
        title="Testing2"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-vector/appetizing-fast-food-vector-illustration-isolated-dark-background-saos-extra_701683-31.jpg"
        title="Testing3"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-vector/appetizing-fast-food-vector-illustration-isolated-dark-background-saos-extra_701683-31.jpg"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-vector/appetizing-fast-food-vector-illustration-isolated-dark-background-saos-extra_701683-31.jpg"
        title="Testing2"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-vector/appetizing-fast-food-vector-illustration-isolated-dark-background-saos-extra_701683-31.jpg"
        title="Testing3"
      />
    </ScrollView>
  );
};

export default Categories;
