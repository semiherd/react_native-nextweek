import { forwardRef } from 'react'
import { View} from 'react-native'
import { Color, ColorValues } from '../../../asset/constant/Color'
import { InputItem } from '../../app/input/InputItem'
import { InputHandle } from '../../app/input/type.input'
import { UserButton } from '../../app/button/index'
import { Col } from '../../app/layout/Layout'
import { useMessage } from '../../../service/hook/index'
import { Api_CreateQuestion_Param } from '../../../type/type.api'
import { useProgressDispatch } from '../../../context/progress/ProgressContext'
import { useUserState } from '../../../context/user/UserContext'

const InputBorderStyle:boolean= false
const InputBgStyle:ColorValues= Color.transparent

type QuestionProps={
	id: string
}

const Question = forwardRef<InputHandle,QuestionProps>((props,ref) => {
	const { createQuestion }= useMessage()
	const { updateError, updateLoading } = useProgressDispatch()
	const { user,manager}= useUserState()

	async function sendQuestion():Promise<void>{
		try{
			const role:'user'|'manager'=manager ?'manager' :'user'
			updateLoading({state:true,description:'createQuestion-api-called'})
			if(ref!==null){
				const question:string= ref.current?.getValue()
				const param:Api_CreateQuestion_Param<typeof role>={
					id: props.id,
					param:{
						content: question
					}
				}
				const response= await createQuestion(param)
				updateLoading({state:false,description:'createQuestion-api-response'})
				if(response.state==='fail'){
					updateError({state:true,error:'fail-createQuestion-response',description:'Question can not be sent'})
				}
				ref.current.resetValue()
			}else{
				updateLoading({state:false,description:'createQuestion-api-no-input'})
				updateError({state:true,error:'messageRef-null',description:'no question found in the input field'})
			}
		}catch(e){
			updateError({state:true,error:e,description:'Question can not bee sent'})
		}
	}

	
	return (
		<Col colNr={0} alignOption="space-between"><>
			<View 
				style={{
					width: '95%',
					backgroundColor: Color.white,
					borderRadius: 5,
					paddingHorizontal: '3%',
					paddingVertical: '2%',
					marginVertical: '2%',
				}}
			>
				<InputItem 
					font={{
						fontFamily: 'Lato',
						fontSize: 12,
						lineHeight: 15,
						fontWeight: '500',
						color: Color.black,
						textAlign: 'left'
					}} 
					multi={true}
					x={true} 
					bgColor={InputBgStyle} 
					l={140} 
					b={InputBorderStyle} 
					tb={false} 
					w={0.3} 
					h={0.05} 
					ref={ref} 
					type={`default`} 
					placeholder="question...?" 
				/>
			</View>
			<UserButton 
				useBorder={true}
				buttontext="send"
				borderStyles={{
					borderRadius: 5,
					borderWidth: 1,
				}}
				fontStyles={{
					fontFamily: 'Lato',
					fontSize: 12,
					fontWeight: '700',
					backgroundColor: Color.white
				}}
				onClickFn={sendQuestion}
				onClickParam={{value: null}}
			/>
		</></Col>
	)
})

export default Question
