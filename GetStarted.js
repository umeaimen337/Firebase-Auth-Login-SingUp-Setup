import React from "react";
import { View, Text, Button } from "react-native";
const GetStarted = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to AI Based Interview Facilitator App</Text>
      <Button title="Get Started" onPress={() => navigation.navigate("RoleSelection")} />
    </View>
  );
};

export default GetStarted;
