import {StyleSheet, Text, View, FlatList, Linking} from 'react-native';
import React from 'react';
import UseFetch from '../../hooks/UseFetch';
import {API_DETAIL} from '../../common';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Detail = ({route}) => {
  const {idMeal} = route.params;

  const {data, error, loading} = UseFetch(`${API_DETAIL}=${idMeal}`);

  const handleButton = youtubeUrl => {
    Linking.openURL(youtubeUrl);
  };

  const renderDetail = ({item}) => (
    <DetailCard
      mealDetail={item}
      onPress={() => handleButton(item.strYoutube)}
    />
  );
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data.meals} renderItem={renderDetail} />;
};

export default Detail;
