import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Temesgen 👋</Text>

      <Link href="/profile" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Profile</Text>
        </Pressable>
      </Link>

      <Link href="/about" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to About</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor:"white" },
  title: { fontSize: 25, fontWeight: "bold", marginBottom: 30 },
  button: {
    backgroundColor: "black",
    padding: 15,
    width: "80%",
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: { color: "white", fontSize: 16, textAlign: "center" },
});
