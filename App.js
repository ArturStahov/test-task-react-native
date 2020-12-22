import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, } from 'react-native';
import NavBar from './src/components/NavBar/NavBar'
import SearchForm from './src//components/SearchForm/SearchForm'
import ImagesThumb from './src/components/ImageThumb/ImageThumb'
import FetchImagesApi from './src/service/FetchImagesApi'
import ModalPreviewImage from './src/components/ModalPreviewImage/ModalPreviewImage'

export default function App() {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [imagePreview, setPreviewImage] = useState(null)
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    handlerFetch();
  }, [query]);

  const handlerFetch = () => {
    setLoading(true)
    FetchImagesApi(query, page).then(data => {
      if (data.results.length === 0) {
        throw 'Oops sorry. No images, change search query!';
      }
      if (images.length < data.total) {
        setImages(prevImages => [...prevImages, ...data.results]);
        setPage(prevPage => prevPage + 1)
      }

    })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handlerFormSearch = (query) => {
    setQuery(query);
    setImages([]);
  }
  const openModal = (imgUrl) => {

    setPreviewImage(imgUrl)
  }
  const closeModal = () => {
    setPreviewImage(null)
  }
  const handlerLoadMore = () => {
    handlerFetch();
  }

  return (
    <View style={styles.body}>
      {!imagePreview && <NavBar title='Search Images' />}
      {!imagePreview && <SearchForm onSubmit={handlerFormSearch} />}


      {!imagePreview && <FlatList style={styles.containerContent}
        data={images}
        renderItem={({ item }) => <ImagesThumb item={item} onOpenModal={openModal} />}
        keyExtractor={item => item.id} />}

      {!imagePreview && loading && <Text style={styles.SpinnerLoading}>...Loading</Text>}
      {!imagePreview && !loading && images.length > 0 && <Button title='Load more' color='#844394' onPress={() => handlerLoadMore()} />}

      {imagePreview && <ModalPreviewImage imageUrl={imagePreview} onCloseModal={closeModal} />}
    </View>
  );
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#131915',
  },
  containerContent: {
    paddingHorizontal: 10,
    width: "100%",
  },
  SpinnerLoading: {
    fontSize: 20,
    color: '#fff'
  }

});
