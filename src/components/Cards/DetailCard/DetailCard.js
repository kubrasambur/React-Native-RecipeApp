import {Text, View, Image,TouchableOpacity} from 'react-native';
import React,{useCallback} from 'react';
import styles from './DetailCard.styles';

const DetailCard = ({mealDetail,onPress}) => {
  return (
    <View>
      <Image style={styles.img} source={{uri: mealDetail.strMealThumb}} />
      <Text style={styles.first}>{mealDetail.strMeal}</Text>
      <Text style={styles.second}>{mealDetail.strArea}</Text>
      <View style={styles.line}/>
      <Text style={styles.dsc}>{mealDetail.strInstructions}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.btn_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailCard;
