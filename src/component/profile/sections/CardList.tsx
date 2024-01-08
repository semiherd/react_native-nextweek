import React,{useState,useEffect} from "react"
import { Color } from '../../../asset/constant/Color'
import { ProfileSection, CardContent, SectionWithAvatar } from '../../../type/type.profile'
import { NoContent } from '../../app/error/index'
import CardLayout from './card/CardLayout'
import ActionButton from './card/ActionButton'
import Content from './Content'
import Avatar from './card/Avatar'
import ResponseComponent from './card/ResponseComponent'
import { RequestUpdateParam } from '../../../type/type.request'

function CardList<T extends ProfileSection>(
	{type,data,cardStyle}:
	{type:T, data:CardContent[]|null, cardStyle:'bottomLine'|'borderLine' }
){
	const [list,setList]= useState<CardContent[]|null>(null)
	const noRequestText= `You have no ${type}`

	async function onDecline(id: CardContent['_id'], type: RequestUpdateParam):Promise<void>{
		try{
			const newList:CardContent[]|undefined= data?.filter((item,index) => item._id!==id)
			if(newList) setList(newList)
		}catch(e){
			console.log(e)
		}
	}

	function handleList(){
		try{
			setList(data)
		}catch(e){
			console.log(e)
		}
	}
	
	useEffect(() => {
		handleList()
	},[data])

	return (
		<>
			{list?.length
				?
					list.map((item:CardContent,index:number) => {
						const avatarSection:SectionWithAvatar= "swap-in"
						if(avatarSection===type){
							return (
								<CardLayout
									key={item._id}
									xIcon={<ResponseComponent {...item} onClick={onDecline} />}
									avatar={<Avatar type={type as SectionWithAvatar} />} 
									content={<Content item={item} id={type}  />}
									action={<ActionButton type={type} {...item} />}
									cardWidth={0.7} 
									useMargin={cardStyle==='bottomLine' ?0 :0.05}
									useBottomSeperator={index==(list.length-1)?0:0.35}
									borderColor={Color.blue}						
								/>
							)
						}	
						return (
							<CardLayout
								key={item._id}
								xIcon={null}
								avatar={null} 
								content={<Content item={item} id={type}  />}
								action={<ActionButton type={type} {...item} />}
								cardWidth={0.7} 
								useMargin={cardStyle==='bottomLine' ?0 :0.05}
								useBottomSeperator={index==(list.length-1)?0:0.35}
								borderColor={Color.blue}						
							/>
						)						
					})				
				:
					<NoContent text={noRequestText} />
				}			
		</>
	)
}

export default CardList
