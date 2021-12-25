import { useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text, Alert } from "react-native";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handlePress = ()=> {
      if (email.length === 0) {
          Alert.alert("Email is empty");
      } else if (password.length === 0) {
          Alert.alert("Password is empty");
      } else if (confirm.length === 0) {
          Alert.alert("Please confirm password");
      } else if (confirm !== password) {
          Alert.alert("Confirm Password don't match");
      } else {
        axios.post('https://loginapp117.herokuapp.com/signup', {
          email,
          password
        }).then(response => {
          Alert.alert("User created");
        }).catch(err => {
          console.log(err);
        });
      }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email..."
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        value={confirm}
        placeholder="Confirm Password..."
        secureTextEntry={true}
        onChangeText={(text) => setConfirm(text)}
      />
      <Pressable style={styles.button} onPress={() => {handlePress()}}>
          <Text style={{color: "white", textAlign: "center"}}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        padding: 8,
        borderStyle: "solid",
        borderColor: "aqua",
        borderWidth: 0.5,
        borderRadius: 12,
        marginBottom: 10,
        backgroundColor: "white",
    },
    button: {
        marginBottom: 20,
        backgroundColor: "black",
        borderRadius: 15,
        padding: 12,
        paddingTop: 8,
        paddingBottom: 8,
        alignSelf: "center",
    }
});

export default Signup;
