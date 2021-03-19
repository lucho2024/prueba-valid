import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TopArtists from '../screens/TopArtists';
import TopTracks from '../screens/TopTracks';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
export default function BottomNav() {
  return (
    <Tab.Navigator initialRoute="topa">
      <Tab.Screen
        name="topa"
        component={TopArtists}
        options={{
          tabBarLabel: 'Top Artist',
          tabBarIcon: ({color, size}) => (
            <Icons name="users" color={'black'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="topt"
        component={TopTracks}
        options={{
          tabBarLabel: 'Top Tracks',
          tabBarIcon: ({color, size}) => (
            <Icons name="music" color={'black'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
