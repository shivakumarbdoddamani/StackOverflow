import React from 'react';
import {Text, ScrollView, StyleSheet, Linking} from 'react-native';
import {decode} from 'html-entities';
import {isCloseToBottom} from './../functions/commonFunctions';
const CommonPage = ({apiData, hasMore, fetchMore}) => {
  return (
    <ScrollView
      onScrollEndDrag={() => fetchMore()}
      onMomentumScrollEnd={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          hasMore && fetchMore();
        }
      }}
      scrollEventThrottle={1}>
      {apiData.map((e, i) => (
        <Text
          style={styles.hyperlinkStyle}
          key={i}
          onPress={() => Linking.openURL(e.link)}>
          {decode(e.title)}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  hyperlinkStyle: {
    color: 'blue',
    marginVertical: 5,
  },
});

export default CommonPage;
