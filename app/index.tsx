import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyComponents/MyButton'
import { useRouter } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const index = () => {

    const router = useRouter();
    const onContinue = () => {
        router.navigate("/login");
    }


  return (
    <GestureHandlerRootView >
        <View style={styles.homeContainer}>
            <Text style={styles.welcomeText}>Welcome To Test App from stack</Text>
            <MyButton title={"Continue"} onPress={onContinue}/>
        </View>
    </GestureHandlerRootView>
    
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

// export default index