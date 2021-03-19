import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from '../../styles/Accordion';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default function Accordion({item}) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <View style={styles.containerAccordion}>
      <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)}>
        <View style={styles.headerContainerAccordion}></View>
      </TouchableWithoutFeedback>
    </View>
  );
}
