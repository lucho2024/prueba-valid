import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Text,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Api from '../../utils/Api';
import Accordion from './Accordion';

export default function ListTracks() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [mostrar, setMostrar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [tam, setTam] = useState([]);
  const arr = [];

  useEffect(() => {
    fetchData();

    for (let index = 1; index <= 50; index++) {
      arr.push(index);
    }
    setTam(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setMostrar(false);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, page]);

  const fetchData = async () => {
    const res = await Api.getTopTracks(page);
    setData(res);
    setMostrar(true);
  };
  return (
    <>
      {mostrar ? (
        <>
          <Picker
            selectedValue={page}
            onValueChange={itemValue => setPage(itemValue)}>
            {tam.map(n => (
              <Picker.Item key={n} label={n + ''} value={n} />
            ))}
          </Picker>
          {/* Renderiza una lista de datos mediante se van cargando los datos,
        con flatlist no toca esperar a que se renderizen todos los datos
        para que se muestren en la pantalla */}
          <FlatList
            data={data}
            initialNumToRender={4}
            renderItem={({item}) => <Accordion item={item} />}
            ListEmptyComponent={() => (
              <ActivityIndicator
                size="large"
                style={{marginTop: Platform.OS === 'ios' ? 120 : 100}}
                color="blue"
              />
            )}
            extraData={refresh}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={fetchData} />
            }
            keyExtractor={item => item.name}
          />
        </>
      ) : (
        <ActivityIndicator
          size="large"
          style={{marginTop: Platform.OS === 'ios' ? 120 : 100}}
          color="blue"
        />
      )}
    </>
  );
}
