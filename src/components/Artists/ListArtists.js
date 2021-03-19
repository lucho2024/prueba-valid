import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Text,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Api from '../../utils/Api';
import Accordion from './Accordion';

export default function ListArtists() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
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
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, page]);

  const fetchData = async () => {
    const res = await Api.getTopArtists(page);
    setData(res);
  };

  return (
    <>
      <Picker
        selectedValue={page}
        onValueChange={itemValue => setPage(itemValue)}>
        {tam.map(n => (
          <Picker.Item key={n} label={n + ''} value={n} />
        ))}
      </Picker>
      <FlatList
        data={data}
        initialNumToRender={4}
        renderItem={({item}) => <Accordion item={item} />}
        ListEmptyComponent={() => (
          <ActivityIndicator size="large" color="white" />
        )}
        extraData={refresh}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchData} />
        }
        keyExtractor={item => item.name}
      />
    </>
  );
}
