
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
    iconAvatar: require("./myPic/exit.jpg"),
    title: 'First Item',
  },
  {
    id: '2',
    iconAvatar: require("./myPic/exit_1.png"),
    title: 'Second Item',
  },
  {
    id: '3',
    iconAvatar: require("./myPic/see_detail.png"),
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <View>
  <Image source={item.iconAvatar} style={styles.avatarStory} />
  <Item title={item.title} />
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
  title: {
    fontSize: 32,
  },
  avatarStory: {
    width: 50,
    height: 50,
  },
});

export default App;
