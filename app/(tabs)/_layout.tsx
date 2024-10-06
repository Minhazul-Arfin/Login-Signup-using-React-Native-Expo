import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#10b981' }}>
        <Tabs.Screen name='index' options={{title:"Home", 
                                            tabBarIcon: ({ color }) => 
                                            <FontAwesome size={28} name="home" color={color} />,}}/>
        <Tabs.Screen name='info' options={{title:"Info",
                                            tabBarIcon: ({ color }) => 
                                              <FontAwesome size={28} name="info" color={color} />,
        }}/>
        <Tabs.Screen name='about'  options={{title:"About",
                                            tabBarIcon: ({ color }) => 
                                              <FontAwesome size={28} name="user" color={color} />,}}/>
    </Tabs>
  )
}

export default TabsLayout