// import { ResizeMode, Video } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import VideoSnack from "./video-snack.mp4";
import { ResizeMode, Video } from "expo-av";
// import Video from "react-native-video";

export default function App() {
  const videoref = useRef<Video>(null);
  return (
    <View style={styles.container}>
      <Video
        ref={videoref}
        style={{ width: "100%", height: "100%" }}
        source={VideoSnack}
        useNativeControls
        renderToHardwareTextureAndroid
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
      {/* <Video
        repeat
        source={VideoSnack}
        controls
        style={styles.containerVideo}
        resizeMode="stretch"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
