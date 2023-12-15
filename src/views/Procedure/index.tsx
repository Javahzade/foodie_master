import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";


export default function Procedure() {
    const [isIngrident, setIsIngrident] = useState(true);
  
    const list = [
      { name: "Olive", composition: "1/4 cup" },
      { name: "Basil", composition: "6 leaves" },
      { name: "Garlic", composition: "3 cloves" },
      { name: "Penne rigate", composition: "1 pound" },
      { name: "Chopped tomatoes", composition: "1 tin" },
    ];
  
    const renderItem = ({ item }) => {
      return (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.composition}>{item.composition}</Text>
        </View>
      );
    };
    return (
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
  
        <View style={styles.content}>
          <TouchableOpacity>
            <Image style={styles.arrow} source={require('../../assets/images/back/png')} />
          </TouchableOpacity>
          <ImageBackground
            style={styles.burger}
            source={require("../../assets/images/burger.png")}
          >
            <TouchableOpacity style={styles.bookmarkBtn}>
              <Image
                style={styles.bookmark}
                source={require("../../assets/images/bookmark.png")}
              />
            </TouchableOpacity>
          </ImageBackground>
  
          <Text style={styles.title}>Hamburger</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => setIsIngrident(true)}
              style={[
                isIngrident ? styles.filterBtn : styles.notSelectedFilterBtn,
              ]}
            >
              <Text
                style={[
                  isIngrident
                    ? styles.filterBtnText
                    : styles.notSelectedFilterBtnText,
                ]}
              >
                Ingirident
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsIngrident(false)}
              style={[
                !isIngrident ? styles.filterBtn : styles.notSelectedFilterBtn,
              ]}
            >
              <Text
                style={[
                  !isIngrident
                    ? styles.filterBtnText
                    : styles.notSelectedFilterBtnText,
                ]}
              >
                Procedure
              </Text>
            </TouchableOpacity>
          </View>
  
          {!isIngrident && (
            <View style={styles.procedureContainer}>
              <Text style={{fontSize:14,fontWeight:"400",textAlign:"justify"}}>
                "Bring a large pot of water to a boil. Add kosher salt to the
                boiling water, then add the pasta. Cook according to the package
                instructions, about 9 minutes. In a large skillet over medium-high
                heat, add the olive oil and heat until the oil starts to shimmer.
                Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes.
                Add the chopped tomatoes, red chile flakes, Italian seasoning and
                salt and pepper to taste. Bring to a boil and cook for 5 minutes.
                Remove from the heat and add the chopped basil. Drain the pasta
                and add it to the sauce. Garnish with Parmigiano-Reggiano flakes
                and more basil and serve warm."
              </Text>
            </View>
          )}
          {isIngrident && <FlatList data={list} renderItem={renderItem} />}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    content: {
      marginHorizontal: 30,
      marginTop: 88,
      flex: 1,
      // borderWidth: 1,
      // alignItems:"center"
    },
    arrow: {
      width: 24,
      height: 24,
      marginBottom: 10,
    },
    burger: {
      width: 315,
      height: 150,
      // alignSelf: "center",
    },
    bookmarkBtn: {
      position: "absolute",
      right: 10,
      bottom: 10,
    },
    bookmark: {
      width: 24,
      height: 24,
    },
    title: {
      marginVertical: 10,
      fontWeight: "600",
      fontSize: 14,
    },
    btnContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom:12
    },
    filterBtn: {
      width: 150,
      height: 33,
      borderRadius: 10,
      backgroundColor: "#129575",
      justifyContent: "center",
      alignItems: "center",
    },
    notSelectedFilterBtn: {
      width: 150,
      height: 33,
      borderRadius: 10,
      // backgroundColor: "#129575",
      justifyContent: "center",
      alignItems: "center",
    },
    filterBtnText: {
      color: "white",
    },
    notSelectedFilterBtnText: {
      color: "#129575",
    },
    procedureContainer: {
      marginTop: 12,
      borderRadius: 12,
      backgroundColor: "#12957580",
      padding: 15,
      minHeight:280,
      flexShrink:0,
      
    },
    item:{
      width:315,
      height:76,
      flexDirection:"row",
      justifyContent:"space-between",
      borderRadius:12,
      backgroundColor:'#12957580',
      alignItems:'center',
      paddingHorizontal:15,
      marginBottom:10
    },
    name:{
      fontWeight:"600"
    },
    composition:{
      color:"white"
    }
  });
  