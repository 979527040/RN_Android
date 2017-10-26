
import React from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';
 class HelloWorld extends React.Component {
   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.hello}>朱尊龙</Text>
       </View>
     )
   }
 }
 var styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
   },
   hello: {
     fontSize: 30,
     textAlign: 'center',
     margin: 10,
   },
 });
 AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
