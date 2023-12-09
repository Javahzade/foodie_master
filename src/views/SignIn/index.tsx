import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MyInput } from "../../components/MyInput";
import { useNavigation } from "@react-navigation/native";


const SignIn = () => {
    const navigation = useNavigation()
  
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
 
    const onChangeEmail = (text: string) => {
        setEmailValue(text)
    }   
    const onChangePassword = (text: string) => {
        setPasswordValue(text)
    }

    const onPressSignUp=()=>{
        console.log('[ressed')
navigation.navigate('SignUp')
    }

    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
                <Text style={styles.h1}>Hello,</Text>
                <Text style={styles.h2}>Welcome Back!</Text>
            </View>
            <View style={styles.inputs}>
                <MyInput title="Email" placeholder="Enter Email" onChangeText={onChangeEmail} />
                <MyInput title="Password" placeholder="Enter Password" secureTextEntry onChangeText={onChangePassword} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.h3}>Don’t have an account? <Text onPress={onPressSignUp} style={styles.h4}>Sign up</Text></Text>
            </View>
        </SafeAreaView>
    )
};

export default SignIn;
const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
    },
    header: {
        marginTop: 50
    },
    inputs: {
        flex: 1,
        gap: 24,
        justifyContent: 'center'
    },
    h1: {
        color: '#000000',
        fontSize: 30,
        fontWeight: '600',
    },
    h2: {
        color: '#121212',
        fontSize: 20,
        fontWeight: '400',
    },
    h3: {
        color: '#121212',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    h4: {
        color: '#FF9C00',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        color: '#129575'
    },
    button: {
        height: 60,
        backgroundColor: '#129575',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },
    footer: {
        marginBottom: 16
    }
})