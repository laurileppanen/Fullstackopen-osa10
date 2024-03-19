import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    backgroundColor: theme.colors.appBarBackgound,
    paddingVertical: 30,
  },
  textStyle: {
    fontSize: theme.fontSizes.appBar,
    color: "#FFFFFF",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.textStyle}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
