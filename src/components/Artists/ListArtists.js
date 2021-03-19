import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Text,
} from 'react-native';
import Api from '../../utils/Api';
import Accordion from './Accordion';

export default function ListArtists() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  const fetchData = async () => {
    const res = await Api.getTopArtists(page);
    setData(res);
  };

  return (
    <>
      {console.log(data)}
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
