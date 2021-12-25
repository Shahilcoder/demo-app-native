import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App() {
  const [login, setLogin] = useState(true);

  return (
    <View style={[styles.container, {backgroundColor: login ? "#b3ff61": "#fc9c47"}]}>
      <Text style={styles.head}>{login ? "Login" : "Sign Up"}</Text>
      <View>{login ? <Login /> : <Signup />}</View>
      <View>
        <Pressable
          style={styles.toggler}
          onPress={() => {
            setLogin(!login);
          }}
        >
          <Text style={styles.togglerText}>
            {login ? "Or Sign Up" : "Or Login"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    padding: 15,
  },
  head: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 12,
    color: "white",
  },
  toggler: {
    backgroundColor: "magenta",
    borderRadius: 15,
    padding: 12,
    paddingTop: 8,
    paddingBottom: 8,
    alignSelf: "center"
  },
  togglerText: {
    fontSize: 12,
    color: "white",
  },
});
