import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from '../../styles/Accordion';

export default function Accordion({item}) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <View style={styles.containerAccordion}>
      <Text></Text>
    </View>
  );
}
