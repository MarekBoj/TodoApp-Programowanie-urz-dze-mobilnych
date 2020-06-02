import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Home from '../screens/Home';
import TodoScreen from '../screens/Plans';
import About from '../screens/Credits';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#c1c1c1'
                
            }}
            
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color,size})=>(
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Plans"
                component={TodoScreen}
                options={{
                    tabBarLabel: 'Plans',
                    tabBarIcon: ({color,size})=>(
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Author"
                component={About}
                options={{
                    tabBarLabel: 'Author',
                    tabBarIcon: ({color,size})=>(
                        <MaterialCommunityIcons name="feather" color={color} size={size} />
                    )
                }}
            />
            </Tab.Navigator>
    );
};

export default BottomTabs;