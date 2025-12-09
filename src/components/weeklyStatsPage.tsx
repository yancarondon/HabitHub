import React from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "./Navbar";

const WeeklyStatsPage = () => {
  // Hardcoded data for frontend
  const completedHabits = 12;
  const totalHabits = 14;
  const completionRate = Math.round((completedHabits / totalHabits) * 100);
  const bestDay = "Thursday";
  const bestDayTasks = "5/5";
  const currentStreak = 3;

  // Data for pie chart visualization
  const completed = completedHabits;
  const incomplete = totalHabits - completedHabits;
  const completedPercentage = (completed / totalHabits) * 100;

  // Weekly day-by-day breakdown
  const weekData = [
    { day: "Mon", completed: 3, total: 3, percentage: 100 },
    { day: "Tue", completed: 2, total: 3, percentage: 67 },
    { day: "Wed", completed: 2, total: 2, percentage: 100 },
    { day: "Thu", completed: 5, total: 5, percentage: 100 },
    { day: "Fri", completed: 0, total: 1, percentage: 0 },
    { day: "Sat", completed: 0, total: 0, percentage: 0 },
    { day: "Sun", completed: 0, total: 0, percentage: 0 },
  ];

  const maxHeight = 80;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* Header */}
          <Text style={styles.title}>Weekly Stats</Text>
          <Text style={styles.weekLabel}>December 2-8, 2025</Text>

          {/* Completion Overview Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>This Week&apos;s Progress</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {completedHabits}/{totalHabits}
                </Text>
                <Text style={styles.statLabel}>Tasks Completed</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{completionRate}%</Text>
                <Text style={styles.statLabel}>Completion Rate</Text>
              </View>
            </View>
          </View>

          {/* Daily Breakdown Bar Chart */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Daily Breakdown</Text>
            <View style={styles.barChartContainer}>
              {weekData.map((dayData, index) => (
                <View key={index} style={styles.barColumn}>
                  <View style={styles.barWrapper}>
                    <View
                      style={[
                        styles.bar,
                        {
                          height:
                            dayData.total > 0
                              ? (dayData.percentage / 100) * maxHeight
                              : 5,
                          backgroundColor:
                            dayData.percentage === 100
                              ? "#4CAF50"
                              : dayData.percentage >= 50
                              ? "#FF8719"
                              : dayData.percentage > 0
                              ? "#FFC107"
                              : "#E0E0E0",
                        },
                      ]}
                    />
                  </View>
                  <Text style={styles.barLabel}>{dayData.day}</Text>
                  <Text style={styles.barValue}>
                    {dayData.completed}/{dayData.total}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Pie Chart Visualization */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Weekly Overview</Text>
            <View style={styles.chartContainer}>
              {/* Simple Pie Chart using circles */}
              <View style={styles.pieChart}>
                {/* Completed portion (orange) */}
                <View
                  style={[
                    styles.pieSlice,
                    styles.pieCompleted,
                    {
                      transform: [
                        { rotate: "0deg" },
                        {
                          scaleX:
                            completedPercentage > 50
                              ? 1
                              : completedPercentage / 50,
                        },
                      ],
                    },
                  ]}
                />
                {/* Incomplete portion (gray) */}
                <View
                  style={[
                    styles.pieSlice,
                    styles.pieIncomplete,
                    {
                      transform: [
                        { rotate: `${(completedPercentage / 100) * 360}deg` },
                      ],
                    },
                  ]}
                />
                {/* Center white circle to create donut effect */}
                <View style={styles.pieCenter}>
                  <Text style={styles.pieCenterText}>{completionRate}%</Text>
                </View>
              </View>

              {/* Legend */}
              <View style={styles.legend}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, styles.legendCompleted]} />
                  <Text style={styles.legendText}>Completed ({completed})</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, styles.legendIncomplete]} />
                  <Text style={styles.legendText}>
                    Incomplete ({incomplete})
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Best Day Card */}
          <View style={styles.card}>
            <View style={styles.bestDayHeader}>
              <Ionicons name="trophy" size={24} color="#FFD700" />
              <Text style={styles.cardTitle}>Best Day This Week</Text>
            </View>
            <View style={styles.bestDayContent}>
              <Text style={styles.bestDayDate}>{bestDay}</Text>
              <Text style={styles.bestDayTasks}>
                {bestDayTasks} tasks completed
              </Text>
              <View style={styles.perfectScore}>
                <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                <Text style={styles.perfectScoreText}>Perfect Day! 🎉</Text>
              </View>
            </View>
          </View>

          {/* This Week's Highlights */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>This Week&apos;s Highlights</Text>
            <View style={styles.highlightItem}>
              <Ionicons name="flame" size={20} color="#FF8719" />
              <Text style={styles.highlightText}>
                {currentStreak}-day streak (and counting!)
              </Text>
            </View>
            <View style={styles.highlightItem}>
              <Ionicons name="star" size={20} color="#FFD700" />
              <Text style={styles.highlightText}>3 perfect days this week</Text>
            </View>
            <View style={styles.highlightItem}>
              <Ionicons name="trending-up" size={20} color="#4CAF50" />
              <Text style={styles.highlightText}>
                86% completion rate (up from last week)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FF8719",
    textAlign: "center",
    marginBottom: 8,
  },
  weekLabel: {
    fontSize: 16,
    color: "#606162",
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  divider: {
    width: 1,
    height: 50,
    backgroundColor: "#E0E0E0",
  },
  statValue: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FF8719",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: "#606162",
    textAlign: "center",
  },
  barChartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 120,
    paddingTop: 10,
  },
  barColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  barWrapper: {
    height: 80,
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  bar: {
    width: 28,
    borderRadius: 4,
    minHeight: 5,
  },
  barLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 4,
  },
  barValue: {
    fontSize: 10,
    color: "#606162",
  },
  chartContainer: {
    alignItems: "center",
  },
  pieChart: {
    width: 160,
    height: 160,
    borderRadius: 80,
    position: "relative",
    marginBottom: 24,
    overflow: "hidden",
    backgroundColor: "#E0E0E0",
  },
  pieSlice: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 80,
  },
  pieCompleted: {
    backgroundColor: "#FF8719",
    transform: [{ rotate: "-90deg" }],
  },
  pieIncomplete: {
    backgroundColor: "#E0E0E0",
  },
  pieCenter: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    top: 30,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  pieCenterText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FF8719",
  },
  legend: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendCompleted: {
    backgroundColor: "#FF8719",
  },
  legendIncomplete: {
    backgroundColor: "#E0E0E0",
  },
  legendText: {
    fontSize: 14,
    color: "#606162",
  },
  bestDayHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  bestDayContent: {
    alignItems: "center",
    paddingVertical: 12,
  },
  bestDayDate: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FF8719",
    marginBottom: 8,
  },
  bestDayTasks: {
    fontSize: 16,
    color: "#606162",
    marginBottom: 12,
  },
  perfectScore: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  perfectScoreText: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "600",
  },
  highlightItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  highlightText: {
    fontSize: 14,
    color: "#606162",
    flex: 1,
  },
});
