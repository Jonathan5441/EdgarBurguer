import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textstil:{
      fontSize: 20,
      fontWeight: '400',
      color:'black',
      marginBottom:10,
    },
    input:{
      width:'80%',
      height:50,
      borderRadius:30,
      padding:10,
      paddingStart:30,
      marginTop:10,
      backgroundColor:'#fff',
    },
    image:{
      marginBottom:20,
      borderRadius:20,
      width:250, 
      height:250,
    },
    button:{
      width:'40%',
      justifyContent: 'center',
      alignItems: 'center',
      height:50,
      borderRadius:30,
      padding:10,
      marginTop:50,
      backgroundColor:'#ffad6f',
    }
  });
 