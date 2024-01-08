import timeIcon from '../image/home/time-icon.png'

export const Home= {
	Time:{
		font:{
			fontFamily: 'Lato',
			weight: 400,
			size: 10,
			lineHeight: 12,
			color: '#000000'
		},
		icon: {
			source: timeIcon,
			width: 3.25, 
			height: 4.96,
			color: '#5394A3'
		}
	},
	ActionButton:{
		style:{
			font:{
				fontFamily: 'Lato',
				fontWeight: 500,
				fontSize: 12,
				color: '#FFFFFF',
				lineHeight: 14.4,
			},
			backgroundColor: '#5394A3',
			borderWidth: 1,
			borderRadius: 15,
		}
	},
	CloseIcon:{
		container:{
			style:{
				width: 24,
				height: 24,
				color: '#000000 0.62',
			}
		},
		text:{
			style:{		
				color: '#FFFFFF',
				fontSize: 13
			}
		}
	},
	
	Header:{
		BgColor: '#5394A3',
		Title:{
			text: 'Home',
		},
		SubTitle: {
			text: 'Good morning, Johns',
		},
		Image:{
			width: 49,
			height: 49
		}
	},
	UpdateSection:{		
		Container:{
			boxShadow: '0px 26px 48px 0 rgba(0,0,0,0.14)'
		},
		Message:{
			icon:{	
				bg:{
					color: '#5394A31F',
					opacity: 0.12
				}
			},
			style:{
				font:{
					fontWamily: 'Lato',
					fontWeight: 400,
					fontSize: 11,
					lineHeight: 13.2,
					color: '#000000'
				}
			}
		},
		SmallHeading:{
			style:{
				font:{
					fontFamily: 'Lato',
					fontWeight: 400,
					fontSize: 11,
					lineHeight: 13.2,
					color: '#000000'
				}
			}
		},
		View:{
			font:{
				fontFamily: 'Lato',
				fontWeight: 500,
				fontSize: 12,
				lineHeight: 14.4,
				color: '#5394A3'
			}
		},
	},
	Shift:{
		Container:{
			image:{
				style:{
					width: 46,
					height: 46,
				},
				label:{
					font:{
						family: 'Lato',
						weight: 400,
						size: 10,
						lineHeight: 12,
						color: '#000000'
					},
				}
			},
		}
	},
	Activity:{
		Tabs:{
			style:{
				container:{
					color: '#66A2AF',
					borderRadius: 13,
					backgroundColor: { 
						active:'#FFFFFF',
						inactive:'#000000'
					},
				},
				font:{
					fontFamily: 'Poppins',
					fontWeight: 500,
					fontSize: 14,
					lineHeight: 21,
					color: { 
						active:'#FFFFFF',
						inactive:'#000000'
					},
					textAlign: 'center'
				}
			}
		},
		SwapItem:{
			image:{
				style:{
					width: 44,
					height: 44,
				}
			},
			name:{
				style:{
					font: {
						fontFamily: 'Lato',
						fontWeight: 500,
						fontSize: 14,
						lineHeight: 16.8,
						color: '#000000'
					}
				}
			},
			shiftSwap:{
				style:{
					font: {
						fontFamily: 'Lato',
						fontWeight: 300,
						fontSize: 13,
						lineHeight: 15.6,
						color: '#000000'
					}
				}
			}
		}
	}
}
