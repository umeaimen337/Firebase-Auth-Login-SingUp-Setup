import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function RoleSelection({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login As</Text>
      <Button title="Candidate" onPress={() => navigation.navigate("Login", { role: "candidate" })} />
      <Button title="Interviewer" onPress={() => navigation.navigate("Login", { role: "interviewer" })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
