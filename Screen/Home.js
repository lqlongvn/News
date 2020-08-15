
import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';


const { View } = require("react-native")
const DATA = [
  {
    id: '1',
    iconAvatar: require("./myPic/baloon_1.jpg"),
    title: 'First News',
    publishingTime: '15/8/20',
  },
  {
    id: '2',
    iconAvatar: require("./myPic/dapTamHiep.jpg"),
    title: 'Second News',
    publishingTime: '12/8/20',
  },
  {
    id: '3',
    iconAvatar: require("./myPic/helicopterUSA_1.jpg"),
    title: 'Third News',
    publishingTime: '14/8/20',
  },
];



const Home = () => {
  const renderItem = ({ item }) => (
    <View style={StyleSheet.listItem}>
      <Text>
        {item.title}
      </Text>

    </View>
  );

  return (
    <>
      <Text> News  </Text>
      <FlatList
        style={StyleSheet.list}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </>
  );
}

const styles = StyleSheet.create({
  list: {
    width: 100,
    height: 100,
    width: "25%",
  },
  listItem: {
    width: 100,
    height: 100,
    width: "25%",
  },
});
