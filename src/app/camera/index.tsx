import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";
import { Canvas } from "@shopify/react-native-skia";
const CameraComponent = () => {
  const device = useCameraDevice("back");
  const permission = useCameraPermission();
 
  

  //   const newMicrophonePermission = await Camera.requestMicrophonePermission();
  if (device == null) return <View style={{ flex: 1 }} />;
  return (
    <Canvas style={{flex:1}}>
      <Camera
        androidPreviewViewType="texture-view"
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </Canvas>
  );
};

export default CameraComponent;
