// import { View, Text, Alert } from 'react-native'
// import React from 'react'
// import MyButton from '@/components/MyComponents/MyButton'


// const index = () => {
//   return (
//     <View>
//       <Text>index from main folder</Text>
//       <MyButton title={"Go To Login"} onPress={() => {return alert("Login Page Loaded")}}/>
//     </View>
//   )
// }

// export default index


// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       // const response = await axios.post('http://10.102.6.45/my_db/login.php', {
//       //   username: email,
//       //   password: password
//       // });

//       const response = await fetch('http://10.102.6.45/my_db/login.php', { 
//       method: 'POST', 
//       headers: { 'Content-Type': 'application/json' }, 
//       body: JSON.stringify({ email: email, password: password })});
      
//       if (response.data.success) {
//         Alert.alert('Login Successful', 'Welcome!');
//       } else {
//         Alert.alert('Login Failed', 'Invalid credentials.');
//       }
//     } catch (error) {
//       console.error('There was an error logging in!', error);
//       Alert.alert('Login Failed', 'An error occurred.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//   },
// });

// export default LoginScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const index = () => {

  return (
    <View style={styles.container}>
      <Text>This is Main Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default index;
