import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'

const InfoTab = () => {
  const [data, setData] = useState(undefined);

  // CALLING API
  // USE ASYNC & AWAIT TO LOAD DATA
  const getAPIData = async () =>{
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result =await result.json();
    // console.log(result);
    setData(result)
  }

// useEFFECT CALL THE API ONLY ONCE, [] FOR CALL ONE TIME ONLY
  useEffect(() =>{
    getAPIData();
  }, []);



  return (
    <GestureHandlerRootView>
      <ScrollView>
      <Text style={{fontSize: 30, textAlign:'center'}}>Fetching Data Form API</Text>
      {
        data ? 

        <View>
          <Text>{data.id}</Text>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text>
        </View>

        :null
      }
    </ScrollView>
    </GestureHandlerRootView>
    
  )
};

// export default InfoTab