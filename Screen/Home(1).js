
import React, { useState, useEffect } from 'react';
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

const API_KEY = '8138289830394481ae948c8e2677ddc1';

const Home = () => {
  console.log('Render Home');

  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  console.log('State', isLoading);

  //Chỉ gọi API lần đầu render component
  useEffect(() => {
    async function getNews() {
      const response = await fetch(
        'http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey='+API_KEY);
        const jsonData = await response.json();
        setArticle(jsonData.articles);
    }


    console.log('Call API');
    async function getNews() {

    }
  }, []);

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
        keyExtractor={item => item.url}
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
