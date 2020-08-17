import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';

// Thay bằng key cá nhân để không bị hạn chế https://newsapi.org/
const API_KEY = '2b31ab63402b46388c46ae1559570030'; //Key của Long

const Home = () => {
  console.log('Render Home');

  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  console.log('State', isLoading);

  // Chỉ gọi API lần đầu render component
  useEffect(() => {
    async function getNews() {
      const response = await fetch(
        'http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=' +
          API_KEY,
      );
      const jsonData = await response.json();
      setArticles(jsonData.articles);

      // Lấy dữ liệu xong thì tắt biểu tượng loading
      setLoading(false);
    }

    console.log('Call API');
    getNews();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Image source={{uri: item.urlToImage}} style={styles.thumbnail} />

      <View style={styles.info}>
        <Text style={styles.newsContent}>{item.title}</Text>
        <Text style={styles.publishedAt}>{item.publishDate}</Text>
      </View>
    </View>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Text style={[styles.header_text, { fontWeight: "bold" }]}>Worldwide News</Text>

      {isLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <FlatList
          style={styles.list}
          data={articles}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item) => item.url}
          onEndReachedThreshold={3}
          onEndReached={({ distanceFromEnd }) => {
             this._ItemLoadMore();
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header_text: {
    color: "#e85154",
    fontSize: 32,
    lineHeight: 40,
    textAlign: "center",
    marginTop:15,
    marginBottom:15,
  },
  list: {
    flex: 1,
  },
  listItem: {
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
  thumbnail: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  info:{
    paddingHorizontal: 15,
    paddingVertical: 25,
    paddingRight: 15,
  },
  newsContent:{
    fontSize:20,
    fontWeight:"bold",
    color:"blue",
    resizeMode: 'contain',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginVertical: 10,
  },
});

export default Home;
