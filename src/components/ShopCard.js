import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

export const ShopCard = ({
  id,
  imgUrl,
  title,
  rating,
  catagory,
  address,
  short_description,
  artists,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 rounded-xl shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-lg"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2 text-amber-600">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <AntDesign name="star" size={22} color="#37363d" opacity={0.5} />
          <Text className="text-sm text-white">
            <Text className="text-amber-600">{rating}</Text> •{" "}
            <Text className="text-black text-bold">{catagory}</Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Entypo name="location-pin" size={22} color="#37363d" opacity={0.4} />
          <Text className="text-xs text-amber-600">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
