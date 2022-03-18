import {Text, View, FlatList} from 'react-native';
import React from 'react';
import {API_MEALS} from '../../common';
import UseFetch from '../../hooks/UseFetch';
import MealCard from '../../components/Cards/MealCard/MealCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Meals = ({navigation, route}) => {
  const {strCategory} = route.params;
  const {data, error, loading} = UseFetch(`${API_MEALS}=${strCategory}`);
  const handleMeal = idMeal => {
    navigation.navigate('Detail', {idMeal});
  };

  const renderMeals = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMeal(item.idMeal)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error/>
  }

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

export default Meals;
