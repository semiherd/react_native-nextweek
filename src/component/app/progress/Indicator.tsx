import React,{Component} from 'react'
import {Text, ActivityIndicator} from 'react-native'
import {
   BallIndicator,
   BarIndicator,
   DotIndicator,
   MaterialIndicator,
   PacmanIndicator,
   PulseIndicator,
   SkypeIndicator,
   UIActivityIndicator,
   WaveIndicator,
} from 'react-native-indicators';

const ReactIndicator= () => {
   return (
      <>
         <DotIndicator style={{marginVertical:'5%',justifyContent:'center'}}  color='tomato' />
      </>
   )  
}

export default ReactIndicator