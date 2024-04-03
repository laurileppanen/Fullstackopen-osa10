import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    backgroundColor: theme.colors.appBarBackgound,
    paddingVertical: 30,
    flexDirection: "row",
  },
  textStyle: {
    fontSize: theme.fontSizes.appBar,
    color: "#FFFFFF",
    marginLeft: 10,
    paddingHorizontal: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to="/">
            <Text style={styles.textStyle}>Repositories</Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to="/signin">
            <Text style={styles.textStyle}>Sign in</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
