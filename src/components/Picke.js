import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';

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
    <Picker
      selectedValue={page}
      onValueChange={itemValue => setPage(itemValue)}>
      {tam.map(n => (
        <Picker.Item key={n} label={n + ''} value={n} />
      ))}
    </Picker>
  );
}
