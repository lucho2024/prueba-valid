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
        <View style={styles.containerImgExpand}>
          <Image source={{uri: item.image[2]['#text']}} style={styles.img} />
        </View>
        <View style={styles.containerTextExpand}>
          <Text style={styles.text}>Duration :</Text>
          <Text style={styles.text}>{item.duration}</Text>
        </View>
        <View style={styles.containerTextExpand}>
          <Text style={styles.text}>Listeners :</Text>
          <Text style={styles.text}>{item.listeners}</Text>
        </View>
        <View style={styles.containerTextExpand}>
          <Text style={styles.text}>Mbid :</Text>
          <Text style={styles.text}>{item.mbid}</Text>
        </View>
        <View style={styles.containerTextExpand}>
          <Text style={styles.text}>Url :</Text>
          <Text style={styles.text}>{item.url}</Text>
        </View>
        <Text style={styles.title}>Artist :</Text>
        <View style={styles.containerTextExpand}>
          <Text style={styles.text}>Name :</Text>
          <Text style={styles.text}>{item?.artist?.name}</Text>
        </View>
        <View style={styles.containerTextExpand}>
          <Text style={styles.text}>Mbid :</Text>
          <Text style={styles.text}>{item?.artist?.mbid}</Text>
        </View>
        <View style={styles.containerTextExpand}>
          <Text style={styles.text}>Url :</Text>
          <Text style={styles.text}>{item?.artist?.url}</Text>
        </View>
      </View>
    </View>
  );
}
