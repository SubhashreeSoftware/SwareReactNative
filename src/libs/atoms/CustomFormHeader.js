import React, { memo } from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../../../GlobalStyles";


const CustomFormHeader = memo(({ style, imageleft, imageright,heading,onPressright,drawer  }) => {

  const navigation = useNavigation();
  
 const  handleBack =()=>{
  navigation.goBack()
 }

const  handleDrawer =()=>{
 navigation.toggleDrawer()
}

  return (
    <SafeAreaView style={styles.group4}>
      <View style={styles.viewview}>
        <Pressable
          style={styles.iconLayout}
          onPress={drawer?handleDrawer:handleBack}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={imageleft}
          />
        </Pressable>
        <View style={styles.offersWrapper}>
          <Text style={styles.offers}>{heading}</Text>
        </View>
        <Pressable
          style={styles.iconLayout}
          onPress={onPressright}
        >
        <View style={[styles.iconKebab, styles.iconLayout]}>
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={imageright}
            />
          </View>
        </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  group4: {
    backgroundColor: Color.white,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  sinTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  offers: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    color: Color.black,
    textAlign: "left",
  },
  offersWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameLayout: {
    height: 32,
    width: 32,
  },
  icon1: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  iconBack1: {
    width: 18,
    height: 18,
    marginLeft: 6,
    overflow: "hidden",
  },
  lax: {
    marginLeft: 6,
  },
  sinParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  july2022: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.lightslategray,
    textAlign: "center",
    marginTop: 3,
    alignSelf: "stretch",
  },
  frameItem: {
    marginTop: 4,
  },
  ellipseParent: {
    position: "absolute",
 

  },
  iconKebab: {
    overflow: "hidden",
  },
  viewview: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "white",
    borderBottomWidth:0.2,
    borderColor:"#fdee12"
  },
});

export default CustomFormHeader;
