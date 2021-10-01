import React from "react";
import { Icon } from "react-native-elements";

const RightIcon = ({ icon, navigation, navigateTo }) => {
  return (
    <Icon
      name={icon}
      type="feather"
      color="#fff"
      onPress={() => navigation.navigate(navigateTo)}
    />
  );
};

export default RightIcon;