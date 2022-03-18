import { StyleSheet} from 'react-native'


export default StyleSheet.create({
    img:{
        width:100,
        height:100,
        resizeMode: 'contain',
        borderRadius: 10,
        marginLeft: 7,
    },
    inner_container:{
        justifyContent: 'center',
        marginLeft:15,
        marginBottom:8
    },
    text:{
        fontSize:25,
    },
    container:{
        flexDirection:"row",
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"#BFB9B2",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50
    },
    first_container:{
        backgroundColor:"orange",
        padding:10
    }
})