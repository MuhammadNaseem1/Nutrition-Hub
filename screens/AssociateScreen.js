import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AssociateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Associates Management</Text>
      <View style={styles.buttonContainer}>
        <Button title="Add Associate" onPress={() => navigation.navigate('ManageAssociate')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Manage Associates" onPress={() => navigation.navigate('ManageAssociate')} />
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
    marginVertical: 10, // Same vertical spacing as before
  },
});

export default AssociateScreen;
