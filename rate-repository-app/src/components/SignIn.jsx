import { Pressable, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../theme";
import { Text } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";

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
  errorTextInput: {
    paddingVertical: 15,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#d73a4a",
    marginTop: 15,
    paddingLeft: 10,
  },
  errorText: {
    color: "#d73a4a",
    marginTop: 5,
    fontSize: 20,
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

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(1).required("Username is required"),
  password: yup.string().min(1).required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        placeholderTextColor="#c7c7c7"
        style={
          formik.touched.username && formik.errors.username
            ? styles.errorTextInput
            : styles.textInput
        }
        id="username"
        name="username"
        type="text"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#c7c7c7"
        style={
          formik.touched.password && formik.errors.password
            ? styles.errorTextInput
            : styles.textInput
        }
        id="password"
        name="password"
        type="text"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
