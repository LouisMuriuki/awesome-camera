import { Link, useNavigation } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Camera } from "react-native-vision-camera";

export default function Page() {
  const navigation = useNavigation();

  const navigateToCamera = async () => {
    const hasPermission = await Camera.requestCameraPermission();
    console.log("hasPermission is", hasPermission);
    if (hasPermission === "granted") {
      navigation.navigate("camera/index");
    }
  };
  return (
    <View className="flex flex-1">
      <Text>Hello world</Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Button title="CAMERA" onPress={navigateToCamera} />
      </View>
    </View>
  );
}
