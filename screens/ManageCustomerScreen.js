import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ManageCustomerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Customers</Text>
      {/* Add your customer management logic here */}
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
});

export default ManageCustomerScreen;
