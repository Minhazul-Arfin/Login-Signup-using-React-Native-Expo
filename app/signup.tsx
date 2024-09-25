import React from 'react'
import MyButton from '@/components/MyComponents/MyButton'
import { View, StyleSheet, Image, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

const signup = () => {
    const router = useRouter();
    const goRegisterPage = () => {
        router.navigate("/login");
    }
    const goLogin = () => {
        router.navigate("/login")
    }

  return (
    <View style={{flex: 1, gap: 4}}>
        <Image source={require("@/assets/images/signup3.jpg")} style={styles.loginImage}/>

        <View style={{gap:20, padding:20}}>
            <TextInput placeholder='Enter Your User Name' style={styles.textFiled}/>
            <TextInput placeholder='Enter Your Email' style={styles.textFiled}/>
            <TextInput placeholder='Enter Password' style={styles.textFiled}/>
            <MyButton title={"Register"} onPress={goRegisterPage}/>
            <Text style={{paddingHorizontal:40}} onPress={goLogin}> <span style={styles.loginBtn}>Login</span> </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage: {
        width: "100%",
        height: 400,
        resizeMode: "cover"
    },
    textFiled: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginHorizontal: 30
    },
    loginBtn: {
        backgroundColor: "#10b981",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: 30,
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
        color: "white",
    }
});


export default signup