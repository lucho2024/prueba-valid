import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Text,
  Platform,
} from 'react-native';
import Api from '../../utils/Api';
import Picker from '../Picke';
import Accordion from './Accordion';

export default function ListArtists() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [mostrar, setMostrar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setMostrar(false);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, page]);

  const fetchData = async () => {
    const res = await Api.getTopArtists(page);
    setData(res);
    setMostrar(true);
  };

  return (
    <>
      {mostrar ? (
        <>
          <Picker page={page} setPage={setPage} />
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
