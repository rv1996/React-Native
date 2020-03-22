import React,{useState}from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText,setOutputText] = useState("Let's do this now");
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change title" onPress={()=>{setOutputText("Welcome to darjiwala.in")}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
