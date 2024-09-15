import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ManageAssociateScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Associates</Text>
      {/* Add your associate management logic here */}
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

export default ManageAssociateScreen;
