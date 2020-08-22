import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

// https://github.com/oblador/react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome5';

// https://momentjs.com/
import moment from 'moment';

// Thay bằng key cá nhân để không bị hạn chế https://newsapi.org/
//const API_KEY = 'ce52845d6e754123b3ecf9f68006b846'; //Key của thầy Huy
const API_KEY = '2b31ab63402b46388c46ae1559570030'; //Key của Long

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  // Chỉ gọi API lần đầu render component
  useEffect(() => {
    async function getNews() {
      console.log('GET DATA FROM PAGE: ', page);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news,cbc-news,nbc-news,fox-news,mtv-news=&page=${page}&pageSize=10&apiKey=${API_KEY}`,
      );
      const jsonData = await response.json();
      setArticles(articles.concat(jsonData.articles));

      // Lấy dữ liệu xong thì tắt biểu tượng loading
      setLoading(false);
    }

    getNews();
  }, [page]);

  const renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Image source={{uri: item.urlToImage}} style={styles.thumbnail} />

      <View style={styles.info}>
        <TouchableOpacity onPress={() => openArticle(item.url)}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
        </TouchableOpacity>

        <Text style={styles.publishedAt}>
          <Icon name="clock" size={30} color="#000" />{' '}
          {moment(item.publishedAt).fromNow()}
        </Text>
      </View>
    </View>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  async function loadMoreArticles() {
    setPage((page) => page + 1);
  }

  async function openArticle(url) {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text>News</Text>

      {isLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <FlatList
          style={styles.list}
          data={articles}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item) => item.url}
          onEndReached={loadMoreArticles}
          onEndReachedThreshold={1}
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginVertical: 10,
  },
  info: {
    flex: 1,
    padding: 15,
  },
  title: {
    marginBottom: 15,
  },
  publishedAt: {},
});

export default Home;
