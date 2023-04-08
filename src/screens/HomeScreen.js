import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, AntDesign } from "@expo/vector-icons";

export const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-orange-400 pt-2 rounded-md">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-slate-50 text-xs">
            Find a Parlor!
          </Text>
          <Text className="font-bold text-slate-50 text-xl">
            Current Location
            <Entypo name="chevron-down" size={20} color="#f8fafc" />
          </Text>
        </View>

        <AntDesign name="bars" size={35} color="#f8fafc" />
      </View>
    </SafeAreaView>
  );
};

//Color Palette
//#886a4a Light Brown
//#000000 Black
//#37363d Dark Gray
//#e3874f Orange
//#707070 Light Gray