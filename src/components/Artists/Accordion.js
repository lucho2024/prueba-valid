import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {styles} from '../../styles/Accordion';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default function Accordion({item}) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <View style={styles.containerAccordion}>
      <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)}>
        <View style={styles.headerContainerAccordion}>
          <View style={styles.containerleft}>
            <Text style={[styles.title, {marginLeft: 5}]}>{item.name}</Text>
          </View>
          <View>
            {expanded ? (
              <Icons name="chevron-up" color={'black'} size={26} />
            ) : (
              <Icons name="chevron-down" color={'black'} size={26} />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={expanded ? styles.containerExpand : {display: 'none'}}>
        <View>
          <Text>Listeners :</Text>
          <Text>{item.listeners}</Text>
        </View>
        <View>
          <Text>Mbid :</Text>
          <Text>{item.mbid}</Text>
        </View>
        <View>
          <Text>Url :</Text>
          <Text>{item.url}</Text>
        </View>
        <View>
          <Image source={{uri: item.image[2]['#text']}} style={styles.img} />
        </View>
      </View>
    </View>
  );
}
