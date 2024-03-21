import { View, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { StyleSheet } from "react-native";

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: theme.colors.repositoryItemBackground,
    paddingVertical: 10,
  },
  topContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  downContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 50,
    marginRight: 50,
  },
  downTextContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  numberContainer: {
    fontWeight: theme.fontWeights.bold,
  },
  tinyLogo: {
    marginLeft: 10,
    width: 70,
    height: 70,
    marginRight: 20,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  textContainer2: {
    marginBottom: 5,
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    color: "white",
    alignSelf: "flex-start",
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

const Item = ({
  fullName,
  description,
  language,
  stars,
  forks,
  reviews,
  rating,
  photo,
}) => (
  <View style={itemStyles.container}>
    <View style={itemStyles.topContainer}>
      <Image style={itemStyles.tinyLogo} source={{ uri: photo }} />
      <View style={itemStyles.textContainer}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          style={itemStyles.textContainer2}
        >
          {fullName}
        </Text>
        <Text style={itemStyles.textContainer2}>{description}</Text>
        <Text style={itemStyles.languageContainer}>{language}</Text>
      </View>
    </View>
    <View style={itemStyles.downContainer}>
      <View style={itemStyles.downTextContainer}>
        <Text style={itemStyles.numberContainer}>{stars}</Text>
        <Text>Stars</Text>
      </View>
      <View style={itemStyles.downTextContainer}>
        <Text style={itemStyles.numberContainer}>{forks}</Text>
        <Text>Forks</Text>
      </View>
      <View style={itemStyles.downTextContainer}>
        <Text style={itemStyles.numberContainer}>{reviews}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={itemStyles.downTextContainer}>
        <Text style={itemStyles.numberContainer}>{rating}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  </View>
);

export default Item;
