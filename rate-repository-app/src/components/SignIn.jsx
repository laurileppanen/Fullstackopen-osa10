import { Pressable, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../theme";
import { Text } from "react-native";
import { useFormik } from "formik";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryItemBackground,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    paddingVertical: 15,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    paddingLeft: 10,
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingVertical: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        style={styles.textInput}
        id="username"
        name="username"
        type="text"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        id="password"
        name="password"
        type="text"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
