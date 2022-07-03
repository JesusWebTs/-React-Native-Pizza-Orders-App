import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import useUser from "../../hooks/useUser";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("jesus.jstest@gmail.com");
  const [password, setPassword] = useState("123456789");
  const { logIn, logOut } = useUser({ navigation });

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 500,
          width: "100%",
        }}
      >
        <TextInput
          value="jesus.jstest@gmail.com"
          style={styles.textInput}
          onChangeText={(user) => setUser(user)}
        />
        <TextInput
          value="123456789"
          style={styles.textInput}
          passwordRules
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableHighlight
        style={styles.loginButton}
        underlayColor="#888"
        onPress={() => logIn({ password, user })}
      >
        <Text style={styles.loginText}>LogIn</Text>
      </TouchableHighlight>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#777",
    borderStyle: "solid",
    width: "70%",
    height: 50,
    fontSize: 20,
    padding: 10,
    margin: 8,
  },
  loginButton: {
    width: "70%",
    backgroundColor: "red",
    height: 50,
    borderRadius: 10,
  },
  loginText: {
    lineHeight: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
});
