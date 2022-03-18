import {StyleSheet,Dimensions} from 'react-native';

const WH =Dimensions.get("window")

export default StyleSheet.create({
  img: {
    width: WH.width,
    height: WH.height/3,
  },
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  button: {
    backgroundColor: 'red',
    borderRadius:7,
    paddingVertical:8,
    marginVertical:15,
    marginHorizontal:12
  },
  btn_text: {
    color: 'white',
    alignSelf: 'center',
    fontSize:20,
    fontWeight: 'bold',
  },
  first:{
    fontSize:25,
    paddingHorizontal:5,
    fontWeight: 'bold',
    color:"#800000"

  },
  second:{
    fontSize:20,
    paddingHorizontal:5,
    marginBottom:5,
    color:"#800000"
  },
  dsc:{
      fontSize:17,
      padding:7,
      color: 'black'
  }
});
