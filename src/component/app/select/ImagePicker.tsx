import React, { useEffect,useState } from 'react';
import {ScrollView,ActivityIndicator,View,Pressable,Text} from 'react-native';
import Icon from 'src/component/common/VectorIcons';
import styles from './spinselector/style/ProfileImageStyles';
import Gallery from 'src/component/tour/CreateComponent/Gallery';

const ProfileImageSelection= () => {
   const [images,setImages]= useState();
   const [defaultData,setDefaultData]= useState();
   const [progress,setProgress]= useState();  
   const [removeItem,setRemoveItem]= useState();
   const [uriArray,setUriArray]= useState([]);
 

   const hookFileUpload= hookFn.useFileUpload({logParam})
   
   const Progress= () => {
      return  <ActivityIndicator style={{justifyContent:'center'}} color="tomato" size="large" />
   }

   async function updateDefault(){
      try{     
         const response= await baseFn.sortByKey(authContextValue?.dbData?.uri,'date','date')
         if(response!=null) setDefaultData(authContextValue?.dbData?.uri)     
      }catch(e){
         console.log(e);
      }
   }

   async function handleRemove(){
      try{
         let param= defaultData?.filter(i=>i.key!=removeItem.key)
         setDefaultData(param);
         await updateDynamoDb(param);
      }catch(e){
         
         setProgress(false)
         baseFn.callAlert('handleRemove function The files could not be added. Please try again.')  
      }
   }

   const pickMultiple= async () => {
      try{
         setProgress(true)
         const location= "user/"+userId+'/'
         const logParam={
            screen: 'Profile',
            component: 'ProfileImageSelection',
            action: 'func:uploadFileS3',
            value: file, 
            error: e,
            user: authContextValue.userData,
         }     
         const pickerResponse= await imagePicker(setProgress,true,1,3,logParam)
         setImages(pickerResponse)
         await hookFileUpload.fileUpload({item: pickerResponse,location})
         
         //if(pickerResponse.length==hookFileUpload.data.length) {
            /*
            const param= {
               item: imagelist,
               setDefaultData,
               defaultData,
               setProgress,
               userId: authContextValue.userData,
               authContextDispatch
            }
            await handleFileAdd(param)           
            */
            //setUriArray(hookResponse.data);
            //setProgress(false)
        // }
      }catch(e){
        
         setProgress(false)
         callAlert('The images could not be added. Please try again.')
         const errorParam={
            tourId: authContextValue.userData,
            screen: 'UpdateTour',
            component: 'function: pickMultiple',
            action: 'pickImage',
            error: e,
            value: file,
            user: authContextValue.userData,
         }
         if(e && errorParam) graphqlFn.insertLog(errorParam);
      }   
   }

   useEffect(() => {
      if(defaultData && removeItem) handleRemove();
   },[removeItem])

   useEffect(() => {
      if(authContextValue?.dbData?.uri) updateDefault()
   },[authContextValue.dbData.uri])

   return ( 
         <ScrollView style={styles.container}>
            {progress && <Progress />}          
            <View style={styles.uploadContainer}>                     
               <Pressable onPress={pickMultiple}>
                  <Icon style={styles.searchIcon} 
                     type="material" 
                     name="add-photo-alternate" 
                     size={48} 
                     color="teal" 
                     />
                  <Text style={styles.uploadText}>Add Images</Text>
               </Pressable>            
            </View>
            <View style={styles.imageContainer}>
               {defaultData && <Gallery setRemoveItem={setRemoveItem} data={defaultData} />} 
            </View>          
         </ScrollView> 
   )
}
export default ProfileImageSelection;