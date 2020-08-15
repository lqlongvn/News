
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
// const DATA = [
//   {
//     id: '1',
//     iconAvatar: require("./myPic/baloon_1.jpg"),
//     title: 'First News',
//     publishingTime:'15/8/20',
//   },
//   {
//     id: '2',
//     iconAvatar: require("./myPic/dapTamHiep.jpg"),
//     title: 'Second News',
//     publishingTime:'12/8/20',
//   },
//   {
//     id: '3',
//     iconAvatar: require("./myPic/helicopterUSA_1.jpg"),
//     title: 'Third News',
//     publishingTime:'14/8/20',
//   },
// ];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.titleStyle}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <View style={styles.newsList} >
    <Image source={item.iconAvatar} style={styles.avatarStory} />
    <View style={styles.newsContent} >
      <Item title={item.title} />
      <Item title={item.publishingTime} />
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
    marginTop: StatusBar.currentHeight || 0,
  },
  newsList: {
    flex:1,
    flexDirection: "row",
  },
  newsContent: {
    flexDirection: "column",
  },
  header_text: {
    color: "#e85154",
    fontSize: 32,
    lineHeight: 40,
    textAlign: "center",
  },

  scrollView: {
    backgroundColor: Colors.lighter,
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
  avatarStory: {
    height: 100,
    flex: 3 / 4,
  },
});

export default App;
