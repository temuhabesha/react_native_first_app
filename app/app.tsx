import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native ScrollView Example</Text>

      <View style={styles.card}><Text>Card 1 Content</Text></View>
      <View style={styles.card}><Text>Card 2 Content</Text></View>
      <View style={styles.card}><Text>Card 3 Content</Text></View>
      <View style={styles.card}><Text>Card 4 Content</Text></View>
      <View style={styles.card}><Text>Card 5 Content</Text></View>
      <View style={styles.card}><Text>Card 6 Content</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  card: {
    height: 120,
    backgroundColor: '#e6e6e6',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
});
