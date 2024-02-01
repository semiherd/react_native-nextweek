import { Dimensions } from 'react-native'
import { Color,ColorValues } from './Color'
import { AlignSelfOptions, AlignOptions,FontStyling, BorderStyle } from '../../type/type.app'
import cancelIcon from '../image/roster/cancel-icon.png'
import exchangeIcon from '../image/roster/exchange-icon.png'

const {width} = Dimensions.get('window')

export const fontStyles= {
	Auth:{
		cancel:{
			font: {
				text: 'Cancel',
				style:{
					fontFamily: 'Mazzard' as FontStyling['fontFamily'],
					fontSize: 18,
					fontWeight: '600' as FontStyling['fontWeight'],
					lineHeight: 21.18,
					backgroundColor: Color.white,
					color: Color.blue102_1,
				}
			}
		},
		forgotpw:{
			font: {
				text: 'Update',
				style:{
					fontFamily: 'Mazzard' as FontStyling['fontFamily'],
					fontSize: 18,
					fontWeight: '600' as FontStyling['fontWeight'],
					lineHeight: 21.18,
					color: Color.white,
					backgroundColor: Color.blue102_1,
				}
			}
		},
		login:{
			font: {
				text: 'Log In',
				style:{
					fontFamily: 'Mazzard' as FontStyling['fontFamily'],
					fontSize: 18,
					fontWeight: '600' as FontStyling['fontWeight'],
					lineHeight: 21.18,
					color: Color.white,
					backgroundColor: Color.blue102_1,
				}
			}
		},
		signup:{
			font: {
				text: 'Sign Up',
				style:{
					fontFamily: 'Mazzard' as FontStyling['fontFamily'],
					fontSize: 18,
					fontWeight: '600' as FontStyling['fontWeight'],
					lineHeight: 21.18,
					color: Color.blue102_1,
					backgroundColor: Color.white,
				}
			}
		},
		create:{
			font: {
				text: 'Sign Up',
				style:{
					fontFamily: 'Mazzard' as FontStyling['fontFamily'],
					fontSize: 18,
					fontWeight: '600' as FontStyling['fontWeight'],
					lineHeight: 21.18,
					backgroundColor: Color.blue102_1,
					color: Color.white,
				}
			}
		},
		SignUp:{		
			title:{
				font:{
					text: {
						v0:'Create your account',
						v1:'Create your account',
					},
					style:{
						v0:{
							fontFamily: 'Mazzard' as FontStyling['fontFamily'],
							fontSize: 24,
							fontWeight: '600' as FontStyling['fontWeight'],
							lineHeight: 28,
							color: Color.black,
							backgroundColor: Color.transparent,
						},
						v1:{
							fontFamily: 'Lato' as FontStyling['fontFamily'],
							fontSize: 24,
							fontWeight: '700' as FontStyling['fontWeight'],
							lineHeight: 22,
							color: Color.white,
							backgroundColor: Color.transparent,
						}
					}
				}
			},
			description:{
				font:{
					text: {
						v0: 'sign up and start planning',
						v1: 'Sign up and start planning'
					},
					style:{
						v0:{
							fontFamily: 'Mazzard' as FontStyling['fontFamily'],
							fontSize: 18,
							fontWeight: '400' as FontStyling['fontWeight'],
							lineHeight: 21,
							color: Color.black,
							backgroundColor: Color.transparent,
						},
						v1:{
							fontFamily: 'Lato' as FontStyling['fontFamily'],
							fontSize: 15,
							fontWeight: '300' as FontStyling['fontWeight'],
							lineHeight: 21,
							color: Color.white,
							backgroundColor: Color.transparent,
						}
					}
				}
			}
		},
		SignIn:{
			title:{
				font:{
					text: {
						v0: 'Welcome Back',
						v1: 'Login',
					},
					style:{
						v0:{
							fontFamily: 'Mazzard' as FontStyling['fontFamily'],
							fontSize: 24,
							fontWeight: '600' as FontStyling['fontWeight'],
							lineHeight: 28.37,
							color: Color.black,
							backgroundColor: Color.transparent,
						},
						v1:{
							fontFamily: 'Lato' as FontStyling['fontFamily'],
							fontSize: 24,
							fontWeight: '700' as FontStyling['fontWeight'],
							lineHeight: 22,
							color: Color.white,
							backgroundColor: Color.transparent,
						}
					}
				}
			},
			forgotPw:{
				font:{
					style:{
						fontFamily: 'Mulish' as FontStyling['fontFamily'],
						fontSize: 18,
						fontWeight: '400' as FontStyling['fontWeight'],
						lineHeight: 22.59,
						color: Color.black38_1,
						backgroundColor: Color.transparent,
					}
				}
			},
			description:{
				font:{
					text: {
						v0: 'Login and start planning',
						v1: 'Login and start planning',
					},
					style:{
						v0:{
							fontFamily: 'Mazzard' as FontStyling['fontFamily'],
							fontSize: 18,
							fontWeight: '400' as FontStyling['fontWeight'],
							lineHeight: 21.28,
							color: Color.black,
							backgroundColor: Color.transparent,
						},
						v1:{
							fontFamily: 'Lato' as FontStyling['fontFamily'],
							fontSize: 15,
							fontWeight: '300' as FontStyling['fontWeight'],
							lineHeight: 22,
							color: Color.white,
							backgroundColor: Color.transparent,
						}
					}
				}
			}
		},
		GetStarted:{
			navButton:{
				font:{
					text: 'Get Started',
					style:{
						fontFamily: 'Poppins' as FontStyling['fontFamily'],
						fontSize: 18,
						fontWeight: '500' as FontStyling['fontWeight'],
						lineHeight: 27,
						color: Color.white,
						backgroundColor: Color.blue102_1,
					}
				}
			},
			description:{
				font:{
					text: 'Your email has been verified! Please get started.',
					style:{
						fontFamily: 'Mazzard' as FontStyling['fontFamily'],
						fontSize: 18,
						fontWeight: '400' as FontStyling['fontWeight'],
						lineHeight: 26,
						color: Color.black61,
					}
				}
			},		
			title:{
				font:{
					text: 'GREAT!',
					style:{
						fontFamily: 'Poppins' as FontStyling['fontFamily'],
						fontSize: 29,
						fontWeight: '600' as FontStyling['fontWeight'],
						lineHeight: 43.5,
						color: Color.black77,
					}
				}
			},		
		},
		Verify:{
			notGet:{
				font:{
					text: 'Not get?',
					style:{
						fontFamily: 'Mazzard' as FontStyling['fontFamily'],
						fontSize: 16,
						fontWeight: '400' as FontStyling['fontWeight'],
						lineHeight: 21.28,
						color: Color.black95,
					}
				}
			},
			resend:{
				font:{
					text: 'Resend',
					style:{
						fontFamily: 'Mazzard' as FontStyling['fontFamily'],
						fontSize: 16,
						fontWeight: '500' as FontStyling['fontWeight'],
						lineHeight: 21.28,
						color: Color.blue102_1,
					}
				}
			},
			verifyButton:{
				font:{
					text: 'Verify',
					style:{
						fontFamily: 'Poppins' as FontStyling['fontFamily'],
						fontSize: 18,
						fontWeight: '500' as FontStyling['fontWeight'],
						lineHeight: 27,
						color: Color.white,
						backgroundColor: Color.blue102_1,
					}
				}
			},
			title:{
				font:{
					text: 'Verify Email Address',
					style:{
						fontFamily: 'Poppins' as FontStyling['fontFamily'],
						fontSize: 22,
						fontWeight: '600' as FontStyling['fontWeight'],
						lineHeight: 33,
						color: Color.black77
					}
				}
			},
			description:{
				font:{
					text: 'Enter the 4 digit code received on your entered email address',
					style:{
						fontFamily: 'Mazzard' as FontStyling['fontFamily'],
						fontSize: 17,
						fontWeight: '400' as FontStyling['fontWeight'],
						lineHeight: 21,
						color: Color.black41
					}
				}
			}
		}
	},
	Home:{
		Activity:{
			tab:{
				backgroundColor:{
					default: Color.transparent as ColorValues,
					selected: Color.blue as ColorValues	
				},
				color:{
					default: Color.gray3 as ColorValues,
					selected: Color.white as ColorValues	
				}
			},
			swap:{
				name:{
					font:{
						style:{
							fontFamily: 'Lato' as FontStyling['fontFamily'],
							fontWeight: '500' as FontStyling['fontWeight'],
							fontSize: 14,
							lineHeight: 16.,
							color: Color.black,
						}
					}
				},
				type:{
					text: 'Shift Swap',
					font:{
						style:{
							fontFamily: 'Lato' as FontStyling['fontFamily'],
							fontWeight: '200' as FontStyling['fontWeight'],
							fontSize: 13,
							lineHeight: 15.6,
							color: Color.black,
						}
					}
				},
				time:{
					font:{
						style:{
							fontFamily: 'Lato' as FontStyling['fontFamily'],
							fontWeight: '400' as FontStyling['fontWeight'],
							fontSize: 10,
							lineHeight: 12,
							color: Color.black76,
						}
					}
				}
			}
		},
		Shift:{
			time:{
				text:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontWeight: '400' as FontStyling['fontWeight'],
						fontSize: 10,
						lineHeight: 12,
						color: Color.black76,
					}
				}
			}
		}
	},
	Roster:{
		Container:{
			styles:{
				containerWidth: 0.9,
				borderRadius: 13,
				borderBottomColor: Color.black11,
				borderBottomWidth: 1,
				borderBottomRadius: 13,
				bgColor: Color.white,
				marginV: 0.015,
				paddingV: 0.015,
				alignSelf: 'center',			
			}
		},
		Title:{
			container:{
				containerStyles:{
					containerHeight: 0.25,
					containerWidth: 0.8,
					paddingV: 0,
					paddingH: 0,
					marginV: 0,
					bgColor: 'transparent',
				}
			},
			titleFont:{
				fontFamily: 'Poppins' as FontStyling['fontFamily'],
				fontSize: 18,
				fontWeight: '500' as FontStyling['fontWeight'],
				lineHeight: 27,
				color: Color.black67
			},
			requestButton:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 12,
						fontWeight: '500' as FontStyling['fontWeight'],
						lineHeight: 14.4,
						color: Color.white,
						backgroundColor: Color.blue
					}
				}			
			},
		},
		MyShiftItem:{
			container: {
				width: 0.8,
				alignOption: 'space-around' as AlignOptions,				
			},
			subContainer:{
				containerHeight: 0.25,
				containerWidth: 0.85,
				borderColor: Color.blue,
				borderBottomColor: Color.blue,
				borderWidth: 1.5,
				borderBottomWidth: 1.5,
				borderRadius: 13,
				borderBottomRadius: 13,
				bgColor: Color.white15, 
				paddingV: 0.02,
				paddingH: 0.02,
				marginH: 0.02,
				marginV: 0.02,
			},
			timeFont:{
				fontFamily: 'Poppins' as FontStyling['fontFamily'],
				fontSize: 15,
				fontWeight: '400' as FontStyling['fontWeight'],
				lineHeight: 22.5,
				color: Color.black62
			},
			dayFont:{
				fontFamily: 'Poppins' as FontStyling['fontFamily'],
				fontSize: 16,
				fontWeight: '500' as FontStyling['fontWeight'],
				lineHeight: 24,
				color: Color.black67
			},
			exchangeIcon:{
				id: 'onExchangeShift',
				source: exchangeIcon,
				styles:{
					backgroundColor: Color.blue24,
					height: 40,
					width: 40,
				},
			},
			cancelIcon:{
				id: 'onCancelShift',
				source: cancelIcon,
				styles:{
					backgroundColor: Color.red17,
					height: 40,
					width: 40
				}
			}
		},
		Activity:{
			noContent:{
				text:{
					style:{
						textAlign: 'center' as FontStyling['textAlign'],
						fontFamily: 'Mazzard' as FontStyling['fontFamily'],
						fontWeight: '600' as FontStyling['fontWeight'],
						fontSize: 15,
						lineHeight: 20,
						color: Color.black62,
					}
				}
			},
			container: {
				style:{
					width: 1,
					alignOption: 'space-between' as AlignOptions,							
				},
				borderStyle:{
					borderColor: Color.black11,
					borderBottomWidth: 1
				} as BorderStyle
			},
			avatar:{
				overlay: 0.06, // -width*0.06
				style:{
					width: 50,
					height: 50,
					borderWidth: 1,
					borderColor: Color.blue,
					borderRadius: 50
				}
			},
			image:{
				style:{
					borderWidth: 1,
					color: Color.white,
					width: 44,
					height: 44,
				},		
			},
			time:{
				style:{
					fontFamily: 'Lato' as FontStyling['fontFamily'],
					fontWeight: '400' as FontStyling['fontWeight'],
					fontSize: 10,
					lineHeight: 12,
					color: Color.black76,
					alignSelf: 'center' as AlignSelfOptions,
				}
			},
			text:{
				loadMore:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontWeight: '500' as FontStyling['fontWeight'],
						fontSize: 13,
						lineHeight: 15.6,
						color: Color.blue,	
						alignSelf: 'center' as AlignSelfOptions,
					}
				},
				user:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontWeight: '500' as FontStyling['fontWeight'],
						fontSize: 14,
						lineHeight: 16.8,
						color: Color.black,	
					}
				},
				action:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontWeight: '200' as FontStyling['fontWeight'],
						fontSize: 13,
						lineHeight: 15.6,
						color: Color.black,					
					}
				}
			}
		},
		Shift:{
			cardContainer:{
				style:{
					containerWidth: 0.8,
					marginV: 0.02
				},	
			},
			content:{
				name:{
					font:{
						style:{
							textAlign: 'center' as FontStyling['textAlign'],
							fontFamily: 'Lato' as FontStyling['fontFamily'],
							fontWeight: '500' as FontStyling['fontWeight'],
							fontSize: 14,
							lineHeight: 16.8,
							color: Color.black,
						}
					}	
				},
			},
			timeTitle:{
				font:{
					style:{
						textAlign: 'center' as FontStyling['textAlign'],
						fontFamily: 'Popping' as FontStyling['fontFamily'],
						fontWeight: '500' as FontStyling['fontWeight'],
						fontSize: 16,
						lineHeight: 24,
						color: Color.black67,
					}
				},
				borderStyle:{
					borderBottomWidth: 1,
					borderBottomColor: Color.black11,
				}
			},		
		}
	},
	Profile:{
		Setting: {
			security:{
				text:{
					title: 'Your password',
					value: 'You have to confirm your password after changing it',
					button: 'Save'
				},
			},
			personal:{
				text:{
					title: 'Your current address',
					value: 'You have to confirm your address after changing it',
					button: 'Save'
				},
			},
			contact:{
				text:{
					title: 'Your current email address',
					value: 'You have to confirm your email address after changing it',
					button: 'Save'
				},
			},
			nav:{
				font:{
					text: '>',
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 19,
						fontWeight: '600' as FontStyling['fontWeight'],
						lineHeight: 22.8,
						color: Color.blue
					}
				}
			},
			header:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 19,
						fontWeight: '600' as FontStyling['fontWeight'],
						lineHeight: 22.8,
						color: Color.blue
					}
				}
			},
			title:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 18,
						fontWeight: '400' as FontStyling['fontWeight'],
						lineHeight: 21.6,
						color: Color.black
					}
				}
			},
			value:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 12,
						fontWeight: '200' as FontStyling['fontWeight'],
						lineHeight: 14.4,
						color: Color.black
					}
				}
			},
		},
		Header:{
			setting:{
				font:{
					text: 'Settings',
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 12,
						fontWeight: '700' as FontStyling['fontWeight'],
						lineHeight: 20,
						color: Color.white
					}
				}
			},
			icon:{
				borderStyle:{
					backgroundColor: Color.blue12,
					width: width * 0.08,
					height: width * 0.08,
				},
				style:{
					width: width * 0.05,
					height: width * 0.05,
				}
			},
			title:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 14,
						fontWeight: '600' as FontStyling['fontWeight'],
						lineHeight: 16.8,
						color: Color.black60
					}
				}
			},
			overtime:{
				container:{
					style:{
						containerWidth: 0.4,
						containerHeight: 0.6,
						bgColor: Color.white,
						borderRadius: 10,
						marginH: 0.15,
						marginV: 0.02,
					}
				},				
			},
			vacation:{
				container:{
					style:{
						containerWidth: 0.8,
						containerHeight: 0.25,
						bgColor: Color.white,
						borderRadius: 10,
						marginV: 0.02,
						marginH: 0.15,
					}
				},
				bar:{
					lColor: Color.blue,
					cColor: Color.gray1
				},
				label:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 16,
						fontWeight: '400' as FontStyling['fontWeight'],
						lineHeight: 19.2,
						color: Color.black62,
					}
				}
			},
			value:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 22,
						fontWeight: '400' as FontStyling['fontWeight'],
						lineHeight: 26.4,
						color: Color.black62,
					}
				}
			}
		},		
		Card:{
			container:{
				style:{
					containerWidth: 0.85,
					containerHeight: 0.25,
					bgColor: Color.white,
					borderRadius: 0,
					marginV: 0,
					marginH: 0
				}
			}
		},
		TitleWithButton:{
			title:{
				style:{
					fontFamily: 'Lato' as FontStyling['fontFamily'],
					fontSize: 19,
					fontWeight: '600' as FontStyling['fontWeight'],
					lineHeight: 22.8,
					color: Color.black62
				}
			},
			button:{
				style:{
					fontFamily: 'Lato' as FontStyling['fontFamily'],
					fontSize: 12,
					fontWeight: '500' as FontStyling['fontWeight'],
					lineHeight: 14.4,
					color: Color.blue
				}
			},
		},
		Button:{
			backgroundColor: Color.blue,
			font:{
				style:{
					fontFamily: 'Lato' as FontStyling['fontFamily'],
					fontSize: 12,
					fontWeight: '500' as FontStyling['fontWeight'],
					lineHeight: 14.4,
					color: Color.white
				}
			}
		},
		RequestIn:{
			time:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 10,
						fontWeight: '400' as FontStyling['fontWeight'],
						lineHeight: 12,
						color: Color.black76,
					}
				}
			},
			type:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 13,
						fontWeight: '300' as FontStyling['fontWeight'],
						lineHeight: 15.6,
						color: Color.black
					}
				}
			},
			name:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 14,
						fontWeight: '500' as FontStyling['fontWeight'],
						lineHeight: 16.8,
						color: Color.black
					}
				}
			}
		},
		RequestOut:{
			time:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 11,
						fontWeight: '400' as FontStyling['fontWeight'],
						lineHeight: 13.2,
						color: Color.black
					}
				}
			},
			type:{
				font:{
					style:{
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontSize: 12,
						fontWeight: '400' as FontStyling['fontWeight'],
						lineHeight: 14.4,
						color: Color.black47
					}
				}
			}
		},
		Blocker:{
			date:{
				style:{
					fontFamily: 'Lato' as FontStyling['fontFamily'],
					fontSize: 11,
					fontWeight: '400' as FontStyling['fontWeight'],
					lineHeight: 13.2,
					color: Color.black
				}
			},
			day:{
				style:{
					fontFamily: 'Lato' as FontStyling['fontFamily'],
					fontSize: 12,
					fontWeight: '400' as FontStyling['fontWeight'],
					lineHeight: 14.4,
					color: Color.black47
				}
			}
		},
		Absence:{
			time:{
				style:{
					fontFamily: 'Lato' as FontStyling['fontFamily'],
					fontSize: 13,
					fontWeight: '400' as FontStyling['fontWeight'],
					lineHeight: 15.6,
					color: Color.black
				}
			},
			day:{
				style:{
					fontFamily: 'Lato' as FontStyling['fontFamily'],
					fontSize: 12,
					fontWeight: '400' as FontStyling['fontWeight'],
					lineHeight: 14.4,
					color: Color.black47
				}
			}
		}
	},
	Message:{
		title:{
			font:{
				style:{
					fontFamily: 'Sk-modernist' as FontStyling['fontFamily'],
					fontWeight: '700' as FontStyling['fontWeight'],
					fontSize: 18,
					lineHeight: 27,
					color: Color.black,
				}
			}
		},
		room:{
			header:{
				font:{
					style:{
						fontFamily: 'Mazzard' as FontStyling['fontFamily'],
						fontWeight: '600' as FontStyling['fontWeight'],
						fontSize: 21,
						lineHeight: 31.5,
						color: Color.white,
					}
				}
			}
		},
		message:{
			from:{
				font:{
					style:{
						fontFamily: 'Poppins' as FontStyling['fontFamily'],
						fontWeight: '600' as FontStyling['fontWeight'],
						fontSize: 14,
						lineHeight: 21,
						color: Color.black,
					}
				}
			},
			text:{
				font:{
					style:{
						fontFamily: 'Sk-Modernist' as FontStyling['fontFamily'],
						fontWeight: '400' as FontStyling['fontWeight'],
						fontSize: 14,
						lineHeight: 21,
						color: Color.black,
					}
				}
			},
			time:{
				style:{
					fontFamily: 'Sk-Modernist' as FontStyling['fontFamily'],
					fontWeight: '700' as FontStyling['fontWeight'],
					fontSize: 12,
					lineHeight: 18,
					color: Color.gray5,
				}
			},
			new:{
				font:{
					style:{
						fontFamily: 'Sk-Modernist' as FontStyling['fontFamily'],
						fontWeight: '700' as FontStyling['fontWeight'],
						fontSize: 12,
						lineHeight: 18,
						color: Color.white,
					}
				},
				width: 0.06,
				backgroundColor: Color.blue
			},
			item:{
				by:{
					font:{
						style:{
							fontFamily: 'Lato' as FontStyling['fontFamily'],
							fontSize: 12,
							fontWeight: '400' as FontStyling['fontWeight'],
							lineHeight: 14.4,
							color: Color.white
						}
					}
				},
				text:{
					font:{
						style: {
							fontFamily: 'Poppins' as FontStyling['fontFamily'],
							fontSize: 12,
							fontWeight: '400' as FontStyling['fontWeight'],
							lineHeight: 18,
							color: Color.white
						}
					}
				}
			}
		},
	},
	Modal:{
		CreateRequest:{
			header:{
				title:{
					style:{
						textAlign: 'center' as FontStyling['textAlign'],
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontWeight: '700' as FontStyling['fontWeight'],
						fontSize: 18,
						lineHeight: 21.6,
						color: Color.white,
					}
				},
				action:{
					style:{
						textAlign: 'center' as FontStyling['textAlign'],
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontWeight: '400' as FontStyling['fontWeight'],
						fontSize: 18,
						lineHeight: 21.6,
						color: Color.blue41,
					}
				}
			},
			tab:{
				font:{
					style:{
						textAlign: 'center' as FontStyling['textAlign'],
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontWeight: '300' as FontStyling['fontWeight'],
						fontSize: 12,
						lineHeight: 18,
					},				
				},
				button:{
					styles:{
						backgroundColor:{
							default: Color.transparent as ColorValues,
							selected: Color.gray4 as ColorValues
						},
						color:{
							default: Color.white as ColorValues,
							selected: Color.white as ColorValues
						}
					}
				}
			},
			text:{
				font:{
					style:{
						textAlign: 'center' as FontStyling['textAlign'],
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontWeight: '400' as FontStyling['fontWeight'],
						fontSize: 18,
						lineHeight: 21.6,
						color: Color.white,
					}
				}
			},
			time:{
				font:{
					style:{
						textAlign: 'center' as FontStyling['textAlign'],
						fontFamily: 'Lato' as FontStyling['fontFamily'],
						fontWeight: '300' as FontStyling['fontWeight'],
						fontSize: 14,
						lineHeight: 16.8,
						color: Color.white,
						backgroundColor: Color.gray3,
						borderRadius: 5
					}
				}
			},
			selector:{
				option:{
					font:{
						style:{
							fontFamily: 'Lato' as FontStyling['fontFamily'],
							fontWeight: '400' as FontStyling['fontWeight'],
							fontSize: 20,
							lineHeight: 16,
							color: Color.gray,
						}
					}
				}
			}
		}
	},
	Header:{
		title:{
			font:{
				style:{
					fontFamily: 'Mazzard' as FontStyling['fontFamily'],
					fontWeight: '600' as FontStyling['fontWeight'],
					fontSize: 25,
					lineHeight: 37.5,
					color: Color.white,
				}
			}
		},
		subtitle:{
			font:{
				style:{
					fontFamily: 'Mazzard' as FontStyling['fontFamily'],
					fontWeight: '400' as FontStyling['fontWeight'],
					fontSize: 19,
					lineHeight: 28.5,
					color: Color.white
				}
			}
		}
	}
}