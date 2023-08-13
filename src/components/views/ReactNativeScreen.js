import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {getDataFromApi} from './../functions/commonFunctions';
import CommonPage from './CommonPage';

const ReactNativeScreen = () => {
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const isFirst = apiData.length === 0;

  useEffect(() => {
    getDataFromApi(page, 'react-native')
      .then(res => {
        console.log('res', res);
        res?.items && setApiData(oldData => [...oldData, ...res.items]);
        !res?.hasMore && setHasMore(res.hasMore);
      })
      .catch(e => {
        console.log(e.message);
      });
  }, [page]);

  const fetchMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <View style={styles.container} key={page}>
      {isFirst && (
        <ActivityIndicator style={styles.loader} size="large" color="#00ff00" />
      )}
      {!isFirst && (
        <Text style={styles.fontBold}>Hot questions on React Native</Text>
      )}
      {apiData && (
        <CommonPage apiData={apiData} hasMore={hasMore} fetchMore={fetchMore} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    marginVertical: 10,
    marginHorizontal: 25,
  },
  loader: {
    alignSelf: 'center',
    height: '100%',
  },
  fontBold: {fontWeight: 'bold'},
});

export default ReactNativeScreen;
