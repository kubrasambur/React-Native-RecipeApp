import {View, Text, FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/UseFetch';
import CategoryCard from '../../components/Cards/CategoryCard/CategoryCard';
import {API_CATEGORY} from '../../common';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Category = ({navigation}) => {
  const {loading, data, error} = useFetch(`${API_CATEGORY}`);
  const handleCategory = strCategory =>
    navigation.navigate('Meals', {strCategory});

  const renderCategories = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategory(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
   return <Error/>;
  }

  return (
    <View>
      <FlatList
        keyExtractor={data.idCategory}
        data={data.categories}
        renderItem={renderCategories}
      />
    </View>
  );
};

export default Category;
