import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyComponents/MyButton'
import { useRouter } from 'expo-router'

export default function index() {

    const router = useRouter();
    const onContinue = () => {
        router.navigate("/login");
    }


  return (
    <View style={styles.homeContainer}>
        <Text style={styles.welcomeText}>Welcome To Test App</Text>
        <MyButton title={"Continue"} onPress={onContinue}/>
    </View>
  )
}

const styles = StyleSheet.create({
    homeContainer: {
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 50,
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: "bold",
    }
})