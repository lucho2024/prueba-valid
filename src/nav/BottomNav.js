import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TopArtists from '../screens/TopArtists';
import TopTracks from '../screens/TopTracks';

const Tab = createBottomTabNavigator();
export default function BottomNav() {
  return (
    <Tab.Navigator initialRoute="topa">
      <Tab.Screen
        name="topa"
        component={TopArtists}
        options={{
          tabBarLabel: 'Top Artist',
        }}
      />
      <Tab.Screen
        name="topt"
        component={TopTracks}
        options={{
          tabBarLabel: 'Top Tracks',
        }}
      />
    </Tab.Navigator>
  );
}
