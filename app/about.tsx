import { View, Text, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        This is a simple practice project built by Temesgen to learn React Native basics.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" ,backgroundColor:"white"},
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 15 },
  text: { fontSize: 18, color: "gray" }
});
