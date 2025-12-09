import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navbar from "./Navbar";

const WeeklyStatsPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Weekly Stats</Text>
        <Text style={styles.subtitle}>
          This is the weekly stats page. If you got here from the navbar,
          routing is working correctly.
        </Text>
      </View>
      <Navbar />
    </SafeAreaView>
  );
};

export default WeeklyStatsPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF7F4",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FF8719",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#606162",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 280,
  },
});
