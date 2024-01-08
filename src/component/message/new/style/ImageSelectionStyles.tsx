import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window');

const styles= StyleSheet.create({
    container:{
      paddingHorizontal: '10%',
      marginHorizontal: '1%',
      width: width, 
    },
    imageContainer:{
      alignSelf: 'center',
      justifyContent: 'center',
    },
    uploadContainer:{
      alignItems:'center',
      justifyContent: 'space-around',
    },
    totalUpload:{
      alignSelf:'center',
      textAlign:'center',
      backgroundColor: 'tomato',
      color: 'white',
      borderRadius: 10,
      padding: 5,
      overflow: 'hidden',
      fontSize: 12,
      fontWeight: '600',
      marginVertical: '1%',
    },
    uploadText:{
      alignSelf: 'center',
      fontWeight: '700',
      color: 'teal',
      fontSize: 15,
    },
    image:{
      borderRadius: 5,
    },
    searchIcon:{
      alignSelf:'center',
    },
});

export default styles


  