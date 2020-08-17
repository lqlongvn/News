
import React from 'react';
import {
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { DATA } from "./myModules/newsData";

const Item = ({ title }) => (
  <View >
    <Text>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <View style={styles.listItem} >
    <Image source={item.iconAvatar} style={styles.thumbnail} />
    <View  >
      <Item title={item.title}  style={styles.newsContent} />
      <Item title={item.publishingTime} style={styles.newsDate} />
    </View>
  </View>
);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={[styles.header_text, { fontWeight: "bold" }]}>Worldwide News 1</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:15,
  },
  listItem: {
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
  info: {
    backgroundColor: 'pink',
  },
  header_text: {
    color: "#e85154",
    fontSize: 32,
    lineHeight: 40,
    textAlign: "center",
  },
  newsContent:{
    fontSize: 32,
    marginTop:15,
  },
  newsDate:{
    fontSize: 22,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  titleStyle: {
    fontSize: 20,
    flex: 1 / 4,
  },
  thumbnail: {
    resizeMode:'contain',
    height: 150,
    width:150,
  },
});

export default App;
