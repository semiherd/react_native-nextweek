import React, { useRef,useState } from "react"
import { FlatList, Dimensions, Pressable, View } from 'react-native'
import { RosterTabs } from '../../asset/constant/RosterTabs'
import { Item, BaseProps } from '../type/type.roster'
import Content from './Content'
import SelectionBar from './SelectionBar'
import RosterTitle from './RosterTitle'

const RosterList= <TProps extends BaseProps>() => {
	const [activeIndex,setActiveIndex]= useState<{index:number}>({index:0})
  const {width,height}= Dimensions.get('screen')
	const smallRef= useRef<FlatList>(null)
	const largeRef= useRef<FlatList>(null)
	const largeItemSize= width
	const smallItemSize= width * 0.03
	
	const scrollToActiveIndex= (index:number) => {
      setActiveIndex({index});
      largeRef?.current?.scrollToOffset({
         offset: index * largeItemSize,
         animated: true
      })

      if(index * (smallItemSize) - smallItemSize /2 > width /2){
         smallRef?.current?.scrollToOffset({
            offset: index * (smallItemSize) - width /2 + smallItemSize/2,
            animated: true
         })
      }
   }

	const renderItemSmall= ({item,index}:{item:Item,index:number}) => {
      
      return (
         <Pressable key={index.toString()} onPress={() => scrollToActiveIndex(index)}>
            <SelectionBar itemSize={smallItemSize} activeIndex={activeIndex.index} index={index} />
         </Pressable>
      )
   }

	const renderItemLarge= ({item}:{item:Item}) => <Content id={item.id} />

	const createRequest= () => console.log('createRequest clicked')

	return (   
		<>                          
			<RosterTitle onRequest={createRequest} title={RosterTabs[activeIndex.index]} />
			<View style={{ width: width, alignItems:'center' }}>
				<FlatList
					ref={smallRef}
					data={RosterTabs}
					renderItem={renderItemSmall}
					keyExtractor={(item,index)=> `small_${index.toString()}`}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false} 
				/>				
			</View>
			<View style={{width,alignItems:'center',}}>
				<FlatList
					ref={largeRef}
					data={RosterTabs}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					renderItem={renderItemLarge}
					keyExtractor={(item,index)=> `large_${index.toString()}`}
					onMomentumScrollEnd={(event:any) => {
						const index = Math.floor(Math.floor(event.nativeEvent.contentOffset.x) / width);
						setActiveIndex({index});
					}}
				/>		
			</View>
		</>     
	)
}
export default RosterList

