import SubContainer from '../../../../app/layout/SubContainer'
import {ContainerStyles} from '../../../../../type/type.app'

const ActivityItem= (
	{children,styles}:
	{children: React.ReactElement,styles:ContainerStyles}
):React.ReactElement => {
	return (
		<SubContainer styles={styles} >		
			{children}
		</SubContainer>
	)
}
export default ActivityItem