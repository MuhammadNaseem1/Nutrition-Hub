import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CustomerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Management</Text>
      <View style={styles.buttonContainer}>
        <Button title="Add Customer" onPress={() => navigation.navigate('ManageCustomer')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Manage Customers" onPress={() => navigation.navigate('ManageCustomer')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
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

export default CustomerScreen;
