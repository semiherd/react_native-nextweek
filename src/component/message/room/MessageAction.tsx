import { useEffect, useRef,useState } from 'react'
import { GestureResponderEvent } from 'react-native'
import { Message } from '../../../type/type.message'
import { Color } from '../../../asset/constant/Color'
import { Row } from '../../app/layout/Layout'
import { useMessage } from '../../../service/hook/UseMessage'
import { InputHandle } from '../../app/input/type.input'
import { 
	ApiResponse_Question,
	Api_UpdateAnswerReaction 
} from '../../../type/type.api'
import VectorIcon from '../../app/icon/VectorIcon'
import Question from './Question'
import PressIcon from './PressIcon'
import { useProgressDispatch } from '../../../context/progress/ProgressContext'

type OnPressEvent= {
	e: GestureResponderEvent
}
type LikeState= {
	like: boolean
}
type OnClickParam= {
	id: string
}

const MessageAction= ({id,w}:{id:Message['_id'],w:number}) => {
	
	const params:OnClickParam= {
		id,
	}
	const { updateAnswerReaction }= useMessage()
	const questionRef= useRef<InputHandle>(null)
	const [state,setState]= useState<boolean|null>(null)
	const { resetLoading, updateError, updateLoading } = useProgressDispatch()

	async function handlePress <T extends OnClickParam,S extends LikeState>(item:T,s:S):Promise<void>{
		try{
			const likeState:'up'|'down'=s.like ?'up' :'down'
			const param={
				id: item.id,
				type: likeState
			}
			const response:ApiResponse_Question<Api_UpdateAnswerReaction>= await updateAnswerReaction(param)
			if(response.state==='success'){
				s.like===state ? setState(null) :setState(s.like)
			}
			if(response.state==='fail'){
				updateError({
					state: true,
					error: 'fail-updateAnswerReaction-response',
					description: 'Message confirmation response update failed'
				})
			}
		}catch(e){
			updateError({
				state: true,
				error: e,
				description: 'error-answer-reaction'
			})		
		}
	}

	return (
		<Row rowWidth={w} alignOption="flex-start">
			<>
				<PressIcon<OnClickParam,LikeState> 
					item={params}
					state={{like: true}}
					onPress={handlePress}
					bg={state===true ?Color.blue_bright : Color.white}
					icon={
						<VectorIcon type="octicon"
							name="thumbsup" 
							size={18}
							color={state===true ?Color.white : Color.gray33}
						/>
					}
				/>
				<PressIcon<OnClickParam,LikeState> 
					item={params}
					state={{like: false}}
					onPress={handlePress}
					bg={state===false ?Color.red_dark : Color.white}
					icon={
						<VectorIcon type="octicon"
							name="thumbsdown" 
							size={18}
							color={state===false ?Color.white : Color.gray33}
						/>
					}
				/>
				<Question id={id} ref={questionRef} />
			</>
		</Row>
	)
}
export default MessageAction