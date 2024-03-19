import { View } from "react-native";
import Text from "./Text";

const Item = ({
  fullName,
  description,
  language,
  stars,
  forks,
  reviews,
  rating,
}) => (
  <View>
    <Text>Full name: {fullName}</Text>
    <Text>Description: {description}</Text>
    <Text>Language: {language}</Text>
    <Text>Stars: {stars}</Text>
    <Text>Forks: {forks}</Text>
    <Text>Reviews: {reviews}</Text>
    <Text>Rating: {rating}</Text>
  </View>
);

export default Item;
