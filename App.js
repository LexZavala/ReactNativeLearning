import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <><View style={styles.container}>
      <Text style={styles.text}>Hello World :) My name is Lex and I am ready to learn mobile development!!!</Text>
      <StatusBar style="auto" />
    </View>
    <View>
        <ScrollView horizontal>
        <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
          <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
          <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
        </ScrollView>
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: "bold",
  },
});
