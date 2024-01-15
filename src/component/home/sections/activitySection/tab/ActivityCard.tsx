import { SwapContent,SwapAction } from '../swap/index'
import { Swap,Absence,Blocker } from '../../../../../type/type.request'
import { VacationContent,VacationAction } from '../vacation/index'
import { EventContent, EventAction } from '../event/index'
import { ActivityTypeUnion } from '../../../../../type/type.home'
import { ActivityTabId } from '../../../../../type/type.home'
import { isAbsence, isBlocker, isSwap } from "../../../../../service/request/HandleActivity"
import { ContainerStyles } from '../../../../../type/type.app'
import CardWithUser from '../CardWithUser'

const SwapContentComponent= (props:Swap) => <SwapContent {...props} />
const SwapActionComponent= (props:Swap) => <SwapAction {...props} />

const VacationContentComponent= (props:Absence) => <VacationContent {...props} />
const VacationActionComponent= (props:Absence) => <VacationAction {...props} />

const EventContentComponent= (props:Blocker) => <EventContent {...props} />
const EventActionComponent= (props:Blocker) => <EventAction {...props} />


const ActivityCard= (props:{
	data: ActivityTypeUnion,
	active: ActivityTabId|null
	styling: ContainerStyles
}) => {
	const {data,...rest}= props

	return <>
			{ isSwap(data)
				? <CardWithUser<typeof props.data> {...rest} 
						data={data} 
						Content={<SwapContent {...data} />}
						Action={<SwapAction {...data} />} />
				: isAbsence(data)
					? <CardWithUser<typeof props.data> {...rest} data={data} 
							Content={<VacationContent {...data} />}
							Action={<VacationAction {...data} />} />
					: isBlocker(data)
						? <CardWithUser<typeof props.data> {...rest} data={data} 
								Content={<EventContent {...data} />}
								Action={<EventAction {...data} />} />
						: null
			}			
		</>
}

export default ActivityCard