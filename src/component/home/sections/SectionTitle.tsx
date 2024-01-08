import React from "react"
import TitleWithButton from '../../app/text/TitleWithButton'
import { useNavigation } from "@react-navigation/core"

const SectionTitle = ({label,title,onClickParam}:{label:string,title:string,onClickParam:{value:string}}) => {
	const navigation= useNavigation()
	
	async function navViewAll(param:{value:string}){        
      try{
			navigation.navigate('ViewAll',{
				title: param.value
			});
		}catch(e){
			console.log(e)
		}
	}

	const showAll= async (param:Object) => {
		try{
			console.log('clicked',param)
			await navViewAll({value: param})
		}catch(e){
			console.log(e)
		}
	}

   return <TitleWithButton 
				buttontext= {label}
				titletext= {title}
				onClickFn={showAll}
				onClickParam={onClickParam}
				useBorder={false}
				fontStyles={{fontSize:19,fontWeight:'500'}}
			/>
}

export default SectionTitle;

