import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import CustomerScreen from './screens/CustomerScreen';
import ManageCustomerScreen from './screens/ManageCustomerScreen';
import AssociateScreen from './screens/AssociateScreen';
import ManageAssociateScreen from './screens/ManageAssociateScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Customer" component={CustomerScreen} />
        <Stack.Screen name="ManageCustomer" component={ManageCustomerScreen} />
        <Stack.Screen name="Associate" component={AssociateScreen} />
        <Stack.Screen name="ManageAssociate" component={ManageAssociateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
