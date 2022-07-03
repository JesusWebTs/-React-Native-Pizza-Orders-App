import { View, Text, Button } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50%",
        }}
      >
        <Button title="Go Login" onPress={() => navigation.navigate("Loged")} />
      </View>
    </View>
  );
};
export default Login;
