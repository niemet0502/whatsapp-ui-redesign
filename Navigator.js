import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Cat"
        component={Cat}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="TopBar"
        component={TopBar}
        options={{
          tabBarLabel: 'Topbar'
        }}
      />
    </Tab.Navigator>
  );
}