
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

const DATA = [
  {
    id: '1',
    iconAvatar: require("./myPic/baloon_1.jpg"),
    title: 'First News',
    publishingTime:'15/8/20',
  },
  {
    id: '2',
    iconAvatar: require("./myPic/dapTamHiep.jpg"),
    title: 'Second News',
    publishingTime:'12/8/20',
  },
  {
    id: '3',
    iconAvatar: require("./myPic/helicopterUSA_1.jpg"),
    title: 'Third News',
    publishingTime:'14/8/20',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.titleStyle}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <View style={styles.newsList} >
    <Image source={item.iconAvatar} style={styles.avatarStory} />
    <Item title={item.title} />
    <Item title={item.publishingTime} />
  </View>
);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={[styles.header_text, { fontWeight: "bold" }]}>Worldwide News</Text>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  newsList:{
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleStyle: {
    fontSize: 20,
    width: "75%",
  },
  avatarStory: {
    width: 100,
    height: 100,
    width: "25%",
  },
});

export default App;
