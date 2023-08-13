import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReactScreen from './ReactScreen';
import ReactNativeScreen from './ReactNativeScreen';
import NodeScreen from './NodeScreen';

const Tab = createBottomTabNavigator();
const options = ({ route }) => {
  const icon = route.name === 'NODE JS' ? 'logo-nodejs' : 'logo-react';
  const tabBarIcon = ({ focused, color, size }) => {
    return <Ionicons name={icon} size={size} color={color} />;
  };

  return {
    tabBarIcon,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};

const NavigationPage = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={({route}) => options({route})}>
      <Tab.Screen name="REACT JS" component={ReactScreen} />
      <Tab.Screen name="REACT NATIVE" component={ReactNativeScreen} />
      <Tab.Screen name="NODE JS" component={NodeScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
export default NavigationPage;
