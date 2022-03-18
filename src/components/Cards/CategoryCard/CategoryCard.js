import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './CategoryCard.styles';

const CategoryCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.first_container}>
        <View style={styles.container}>
          <Image style={styles.img} source={{uri: category.strCategoryThumb}} />
          <View style={styles.inner_container}>
            <Text style={styles.text}>{category.strCategory}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
