import { StyleSheet} from 'react-native'


export default StyleSheet.create({
    img:{
        width:380,
        height:200,
        borderRadius:10,
        marginTop:12,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    container:{
        alignItems:"center",
        backgroundColor:"orange",
      
    },
    bg:{
        position: 'absolute',
        opacity:0.45,
        backgroundColor: 'black',
        width:"100%",
        height:35,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    text:{
        position: 'absolute',
        flexGrow: 0,
        alignSelf: 'flex-end',
        color: 'white',
        fontSize:28,
        fontWeight: 'bold',
        borderBottomRightRadius:10,
        paddingHorizontal:8,
        textAlign: 'right'
    }
})