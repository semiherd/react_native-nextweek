import {StyleSheet,Dimensions} from 'react-native';

const styles= StyleSheet.create({
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
		width:'100%',
		height: '100%'
	}
})

export {
	styles
}