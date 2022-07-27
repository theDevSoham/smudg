import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, {useContext} from "react";
import tw from "tailwind-react-native-classnames";
import LeftButton from './../assets/svg/LeftButton';
import RightButton from './../assets/svg/RightButton';
import Like from './../assets/svg/Like';
import Comment from "../assets/svg/Comment";
import { StateContext } from "../Context/StateContext";

const VideoContainer = () => {
    const {likes, comments} = useContext(StateContext);
    const [isLiked, setIsLiked] = likes;
    const [isCommented, setIsCommented] =comments;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLayer}>
        <View style={styles.heading}>
          <Text>Aliquam dignissim a tellus eu egestas.</Text>
        </View>
        <View style={[tw`mt-2`, styles.vidHead]}>
          <View style={styles.footLeft}>
            <View style={styles.rectangle}>
              <View style={styles.round}></View>
            </View>
          </View>
          <View style={[tw`px-2`, styles.footRight]}>
            <Text>Deepika Padukone</Text>
            <Text style={{ fontSize: 10, color: "gray" }}>Fashion Stylist</Text>
          </View>
        </View>

        <View style={styles.vidContainer}>
            <TouchableOpacity>
                <LeftButton />
            </TouchableOpacity>

            <View style={styles.video}>

            </View>

            <TouchableOpacity>
                <RightButton />
            </TouchableOpacity>
        </View>

        <View style={styles.interactions}>
            <TouchableOpacity onPress={() => setIsLiked(isLiked => !isLiked)}>
                <Like isClicked={isLiked}/>
                <Text style={{textAlign: 'center'}}>3</Text>
            </TouchableOpacity>
                
            <TouchableOpacity onPress={() => setIsCommented(isCommented => !isCommented)}>
                <Comment isClicked={isCommented}/>
                <Text style={{textAlign: 'center'}}>3</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default VideoContainer

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    heading: {
      fontSize: 20,
    },
    vidHead: {
      flexDirection: "row",
      alignItems: "center",
    },
    rectangle: {
      position: "relative",
      width: 20,
      height: 20,
    },
    round: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#B5B5B5",
      borderRadius: 50,
    },
  
    containerLayer: {
      height: "100%",
      width: "100%",
      paddingVertical: 40,
      paddingHorizontal: 30,
    },
  
    vidContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "80%",
    },
    video: {
      width: "80%",
      height: "80%",
    },
    interactions: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    }
  });