import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Welcome back !!!</Text>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>count = {count}</Text>

      <View>
        <Button title='Tap mee' onPress={() => setCount(count + 1)} />
        <Button title='Reset' onPress={() => setCount(0)} color="pink" />

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
  }
});
