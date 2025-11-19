import { View, Text, StyleSheet, Image } from "react-native";
import ButtonText from '../components/buttonText.jsx'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.avatar}
        source={{ uri: "https://i.pravatar.cc/300" }} 
      />

      <Text style={styles.name}>Temesgen Wondim</Text>
      <Text style={styles.role}>MERN Stack & Future AI Developer</Text>
      <ButtonText/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20 ,
    backgroundColor:"white",
  },
  avatar: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 20 
  },
  name: { fontSize: 24, fontWeight: "bold", color:"gray" },
  role: { fontSize: 16, color: "gray", marginTop: 5 },
});
