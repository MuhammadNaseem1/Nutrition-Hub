import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Hub Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Button title="Customer" onPress={() => navigation.navigate('Customer')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Associates" onPress={() => navigation.navigate('Associate')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: '20%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10, // Add vertical space between buttons
  },
});

export default DashboardScreen;
