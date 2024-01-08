import React,{useEffect, useState} from "react"
import RequestContent from "./RequestContent"
import { TabItem } from "../../../component/app/button/tab/type.tab"
import { NoContent } from "../../../component/app/error/index"
import { Col } from "../../../component/app/layout/Layout"
import { UserButton } from "../../../component/app/button"
import { Color } from "../../../asset/constant/Color"
import { fontStyles } from "../../../asset/constant/FontStyles"

function TabContent<TVal>({tabs}:{tabs:TabItem<TVal>[]}){
	
	const [active,setActive]=useState<TabItem<TVal>|null>(null)
	
	async function handleTab(){
		try{
			const item:TabItem<TVal>[]= tabs?.filter(item => item.state===true)
			setActive(item[0])
		}catch(e){
			console.log(e)
		}
	}

	function addFile():void {
		try{
			console.log('addAttachment clicked')
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleTab()
	},[tabs])
	
	return (
		<>
			{active===null
				?	<NoContent text="Please Select a Tab" /> 
				:	
					<Col colNr={0} alignOption="center">
						<>
							<RequestContent<TVal> {...active} />						
							<UserButton<{}> 
								buttontext={"Add Attachment"}
								onClickFn={addFile}
								onClickParam={{}}
								width={0.5}
								useBorder={true}
								fontStyles={{
									...fontStyles.Modal.CreateRequest.text.font.style,
								}}
							/>							
						</>
					</Col>					
			}
		</>
	)
}

export default TabContent
