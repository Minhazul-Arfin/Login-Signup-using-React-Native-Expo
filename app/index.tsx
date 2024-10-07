import { View, StyleSheet, Image, Text, TextInput } from 'react-native'
import MyButton from '@/components/MyComponents/MyButton'
// import { TextInput } from 'react-native-gesture-handler'
import { Link, useRouter } from 'expo-router'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const login = () => {
    

    const router = useRouter();
    const goRegisterPage = () => {
        router.navigate("/(tabs)/tabIndex");
    }


  return (
    <GestureHandlerRootView >
        <ScrollView>
        <SafeAreaView style={{flex: 1, gap: 4}}>
            <Text style={styles.nsuTitle}>Welcome To NSU</Text>
            <Image source={require("@/assets/images/login.jpg")} style={styles.loginImage}/>

            <View style={{gap:20, padding:20}}>
                <TextInput placeholder='Enter User Name' style={styles.textFiled}/>
                <TextInput placeholder='Enter Password' style={styles.textFiled}/>
                <MyButton title={"Login"} onPress={goRegisterPage}/>
                <Text style={{paddingHorizontal:40}} onPress={goRegisterPage}>New Here?  <Link href={"/signup"}>Signup Now</Link></Text>
            </View>
        </SafeAreaView>
        </ScrollView>
        
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
    nsuTitle:{
        textAlign: "center",
        fontSize: 40,
        fontWeight: "500",
    }
});


export default login