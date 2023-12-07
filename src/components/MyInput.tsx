import React from "react"
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native"

interface Props extends TextInputProps {
    title:string;
}

export const MyInput: React.FC<Props> = ({title,...props}) => {
   return(
    <View style={styles.container}>
        <View style={styles.label}>
            <Text style ={styles.labelText}>
                {title}
            </Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholderTextColor="#129575"
                {...props}
            />
        </View>
    </View>
   )
}
const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      height:80
    } ,
    label:{
      marginBottom:5
    },
    labelText:{
      fontSize:14,
    },
    inputContainer:{
      borderRadius:10,
      borderWidth:1.5 ,
      borderColor:'#129575',
      paddingHorizontal:20
    },
    input:{
     fontSize:12,
    },
  })