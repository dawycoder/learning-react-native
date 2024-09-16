import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {


  const [count, setCount] = useState(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [student, setStudent] = useState([
    { name: "John", age: 20 },
    { name: "Doe", age: 25 },
    { name: "Smith", age: 30 },
    { name: "Jane", age: 22 },
    { name: "Alex", age: 27 },
    { name: "Emily", age: 24 },
    { name: "John", age: 20 },
    { name: "Doe", age: 25 },
    { name: "Smith", age: 30 },
    { name: "Jane", age: 22 },
    { name: "Alex", age: 27 },
    { name: "Emily", age: 24 },
  ]);


  return (
    <View style={styles.container}>
      <View>
        <Text>Student List:</Text>
        <ScrollView>
          <View>
            {student.map(item => {
              return (
                <View key={item.name} style={{ backgroundColor: "red", padding: 20, marginBottom: 30 }}>
                  <Text>{item.name}</Text>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
