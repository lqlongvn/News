import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

// Thay bằng key cá nhân để không bị hạn chế https://newsapi.org/
const API_KEY = '2b31ab63402b46388c46ae1559570030'; //Key của Long

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  console.log('State', isLoading);

  // Chỉ gọi API lần đầu render component
  useEffect(() => {
    console.log('Get Data from page: '+page);
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?sources=bbc-news,cbc-news,nbc-news,fox-news,mtv-news=&page='+page+'&pageSize=3&apiKey=' + API_KEY     );
      const jsonData = await response.json();
      setArticles(jsonData.articles);

      // Lấy dữ liệu xong thì tắt biểu tượng loading
      setLoading(false);
    
    console.log('Call API');
    getNews();
  }, [page]);

  const renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Image source={{uri: item.urlToImage}} style={styles.thumbnail} />

      <View style={styles.info}>
        <Text style={styles.newsContent}>{item.title}</Text>
        <Text style={styles.publishedAt}>{item.publishedAt}</Text>
      </View>
    </View>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  async function loadMoreArticles(){
    //Gọi lên api để lấy dữ liệu trang tiếp theo
    setPage((page)=>page+1);
  }

  async function openArticle(){
    //Gọi lên api để lấy dữ liệu trang tiếp theo
    setPage((page)=>page+1);
  }



  return (
    <SafeAreaView style={styles.container}>
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
          onEndReached={loadMoreArticles}
        />
      )}
    </SafeAreaView>
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
