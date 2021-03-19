import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, View, StyleSheet} from 'react-native';

export default function Picke({page, setPage}) {
  const [tam, setTam] = useState([]);
  const arr = [];
  useEffect(() => {
    //crear un arreglo con 50 posiciones para luego recorrelo con map en el picker
    for (let index = 1; index <= 50; index++) {
      arr.push(index);
    }
    setTam(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.containerPicker}>
      <Text style={styles.text}>Page : </Text>
      <Picker
        selectedValue={page}
        onValueChange={itemValue => setPage(itemValue)}>
        {tam.map(n => (
          <Picker.Item key={n} label={n + ''} value={n} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPicker: {
    display: 'flex',
    marginHorizontal: 15,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 28,
  },
});
