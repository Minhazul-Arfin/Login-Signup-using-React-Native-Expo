import { View, Text, Button, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { SearchBar } from '@rneui/themed';


const info = () => {

    const [data, setData] = useState([]);

    const getAPIData = async ()=>{
        // const url = 'https://jsonplaceholder.typicode.com/posts';
        const url = 'https://jsonplaceholder.typicode.com/users';
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(()=>{
        getAPIData();
    }, []);

 
    function callNowBtn (phoneNumber){
        let phoneNbr = phoneNumber;
        Linking.openURL('tel:${phoneNbr}');
    }


  return (
    <GestureHandlerRootView>
        <ScrollView>
        <Text style={{fontSize: 30, textAlign:'center'}}>Fetching Data From API</Text>
        {
            data.length ?
            data.map((item)=>
                    <View style={{padding: 20, borderWidth: 2, borderRadius: 20, borderColor: '#92f0d4', marginHorizontal: 10, marginVertical: 5, backgroundColor: '#bbf7d0'}}>
                        <Text style={{fontSize: 20}}>ID: {item.id}</Text>
                        <Text style={{fontSize: 20}}>Name: {item.name}</Text>
                        <Text style={{fontSize: 20}}>Email: {item.email}</Text>
                        <Text style={{fontSize: 20}}>Phone: {item.phone}</Text>
                        <Text style={{fontSize: 20}}>City: {item.address.city}</Text>
                        <Text style={{fontSize: 25,
                                     backgroundColor: "#10b981",
                                     textAlign:'center',
                                     paddingVertical: 10,
                                     marginTop: 10,
                                     marginHorizontal: '10%',
                                     borderRadius: 20}} 

                                onPress={()=>{Linking.openURL('tel:01732903003');}}>Call Now</Text>
                    </View>   
            )
            : null
        }
        </ScrollView>
    </GestureHandlerRootView>
  )
}

export default info