import * as tabList from '../../screen/bottom-tab/index';
import * as tabIcons from '../image/bottom-tab/index';
import {LabelProps} from '../../type/type.tab'

const {HomeTab,ChatTab,ProfileTab,RosterTab}= tabList
const {
	homePng,
	profilePng,
	chatsPng,
	calendarPng
}= tabIcons

const imageProps:LabelProps= {
	font: {
		fontFamily: 'Poppins',
		weight: '500',
		size: 12,
		lineHeight: 12
	},
	size:{
		width: 15,
		height: 15
	},
	color:{
		default: '#5394A3',
		focused: '#616161'
	}
}
const BOTTOMTABS={
	HOME: {
		name:'HOME',
		component: HomeTab,
		source: homePng,
		styles: imageProps,
		testId: {
			icon:{
				default:'bottom-tab-home-icon-default',
				focused:'bottom-tab-home-icon-focused'
			},
			text:{
				default:'bottom-tab-account-text-default',
				focused:'bottom-tab-account-text-focused',
			}
		}		
	},
	ROSTER: {
		name:'ROSTER',
		component:RosterTab,
		source: calendarPng,
		icon:{
			default:{ name:'roster-image',color:'teal' },
			focused:{ name:'roster-image',color:'tomato' },		
		},
		styles:imageProps,	
		testId: {
			icon:{
				default:'bottom-tab-roster-icon-default',
				focused:'bottom-tab-roster-icon-focused'
			},
			text:{
				default:'bottom-tab-roster-text-default',
				focused:'bottom-tab-roster-text-focused',
			}
		}
	},
	MESSAGE: {
		name:'MESSAGE',
		component: ChatTab,
		source: chatsPng,
		styles:imageProps,	
		icon:{ 
			default:{ name:'message-image',color:'teal' },
			focused:{ name:'message-image',color:'tomato' },
		},
		testId: {
			icon:{
				default:'bottom-tab-message-icon-default',
				focused:'bottom-tab-message-icon-focused'
			},
			text:{
				default:'bottom-tab-message-text-default',
				focused:'bottom-tab-message-text-focused',
			}
		}
	},
	PROFILE: {
		name:'PROFILE',
		component: ProfileTab,
		source: profilePng,
		styles:imageProps,	
		icon:{ 
			default:{ name:'profile-image',color:'teal' },
			focused:{ name:'profile-image',color:'tomato' },		
		},
		testId: {
			icon:{
				default:'bottom-tab-profile-icon-default',
				focused:'bottom-tab-profile-icon-focused'
			},
			text:{
				default:'bottom-tab-profile-text-default',
				focused:'bottom-tab-profile-text-focused',
			}
		}
		
	},
}
const BOTTOMTAB_NAV_TINTCOLOR={
	ACTIVE: 'tomato',
	INACTIVE: 'teal',
	WHITE: 'white'
}

export {
	imageProps,
	BOTTOMTABS,
	BOTTOMTAB_NAV_TINTCOLOR
}