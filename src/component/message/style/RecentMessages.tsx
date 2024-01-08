import {StyleSheet,Dimensions} from 'react-native';

const styles= StyleSheet.create({
	bottomFixed:{
		position:'absolute',
		bottom: 0,left:0,right:0,
	},
	listContainer:{
		padding: 8,
		height: "100%"
	},
	inputContainer:{
      	width: '100%',      
		justifyContent: 'flex-end', 
		alignItems: 'center',
		position: 'absolute',
		bottom: 5,
	},
	chatContainer:{
		width:'100%',height: '100%'
	}
})

export {
	styles
}