import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {


  const [count, setCount] = useState(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text>Welcome back !!!</Text>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>count = {count}</Text>
      <Text>Your name: {name}</Text>
      <TextInput

        onChangeText={(value) => setName(value)}
        multiline
        style={styles.textInput} />
      <View>
        <Button title='Tap mee' onPress={() => setCount(count + 1)} />
        <Button title='Reset' onPress={() => setCount(0)} color="pink" />
      </View>

      <View>
        <Text>
          Your Age: {age}
        </Text>
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          onChangeText={(e) => setAge(e)}
          maxLength={2} //max length of input
        />
      </View>
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
  textInput: {

    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
