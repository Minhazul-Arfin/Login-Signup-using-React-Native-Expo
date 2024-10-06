import { View, StyleSheet, Image, Text, TextInput } from 'react-native'
import MyButton from '@/components/MyComponents/MyButton'
// import { TextInput } from 'react-native-gesture-handler'
import { Link, useRouter } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState } from 'react'

const login = () => {
    

    const router = useRouter();
    const goRegisterPage = () => {
        router.navigate("/signup");
    }


  return (
    <GestureHandlerRootView >
        <View style={{flex: 1, gap: 4}}>
        <Image source={require("@/assets/images/login.jpg")} style={styles.loginImage}/>

        <View style={{gap:20, padding:20}}>
            <TextInput placeholder='Enter User Name' style={styles.textFiled}/>
            <TextInput placeholder='Enter Password' style={styles.textFiled}/>
            <MyButton title={"Login"} onPress={goRegisterPage}/>
            <Text style={{paddingHorizontal:40}} onPress={goRegisterPage}>New Here?  <Link href={"/signup"} style={styles.signupBtn}>Signup Now</Link></Text>
        </View>
    </View>
    </GestureHandlerRootView>
    
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
    // signupBtn: {
    //     backgroundColor: "#10b981",
    //     paddingHorizontal: 40,
    //     paddingVertical: 15,
    //     borderRadius: 10,
    //     marginHorizontal: 30,
    //     fontWeight: "bold",
    //     textAlign: "center",
    //     padding: 5,
    //     color: "white",
    // }
});


export default login