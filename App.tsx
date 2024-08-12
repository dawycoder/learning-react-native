import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.parent}>Vung oi <Text style={styles.hello}>mo ra</Text></Text>
      </View>
      <Text style={styles.hello}>Hellooooooo</Text>
      <StatusBar style="auto" />
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
  hello: {
    color: "red",
    fontSize: 30
  },
  parent: {
    fontSize: 20,
    color: "pink"
  }

});
