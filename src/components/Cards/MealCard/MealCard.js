import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './MealCard.styles';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground style={styles.img} source={{uri: meal.strMealThumb}}>
          <Text style={styles.bg}></Text>
          <Text numberOfLines={1} style={styles.text}>
            {meal.strMeal}
          </Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
