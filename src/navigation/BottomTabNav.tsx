import React, { useState } from 'react';
import {TextStyle,Image,Text,Dimensions} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute, RouteProp } from "@react-navigation/native"
import { 
    imageProps,
    BOTTOMTABS,
    BOTTOMTAB_NAV_TINTCOLOR 
} from '../asset/constant/BottomTab'

import { BottomTabList } from '../type/type.nav'
import { capitalizeFirstCh } from '../service/app/index'

const BottomTab = createBottomTabNavigator();

const { width,height}= Dimensions.get('window')

export default function BottomTabNav () {  
    const userData = {
        id: 'testuser'
    }
    const bottomTabHiddenScreens:string[]=['Chatroom']
    
    const { HOME,PROFILE,MESSAGE,ROSTER }= BOTTOMTABS
    const { ACTIVE,INACTIVE,WHITE }= BOTTOMTAB_NAV_TINTCOLOR

 
    return (   
        <BottomTab.Navigator 
            initialRouteName="HOME"         
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                   // display: bottomTabHiddenScreens.includes(getFocusedRouteNameFromRoute(route) as string)==true ?'none' :'flex',
                },
                tabBarLabel: ({focused}) => {
                    const response= {value: route.name}
                    const color= focused? imageProps.color.focused:imageProps.color.default
                    const status= focused? 'focused':'default'
                    const labelTextStyle:TextStyle= {
                        fontFamily: imageProps.font.fontFamily,
                        fontSize: imageProps.font.size,
                        fontWeight: imageProps.font.weight,
                        lineHeight: imageProps.font.lineHeight,
                        overflow: 'hidden',
                        borderRadius: 5,
                        padding:3,
                        marginTop:1,
                        color
                    }
                    return <Text testID={`bottom-tab-${route.name}-text-${status}`} style={labelTextStyle}>{capitalizeFirstCh(response?.value)}</Text>
                },
                tabBarIcon: ({focused}) => {
                    const {source,styles}= BOTTOMTABS[route.name]
                    return <Image
                        resizeMode={'cover'}
                        source={source}
                        style={{
                            tintColor: focused?imageProps.color.focused:imageProps.color.default,
                            width: styles.size.width,
                            height: styles.size.height,
                        }}
                    />
                },                        
            })}   
        >   
            <BottomTab.Screen 
                //listeners={ ({ route }) => tabListenerFn(route)}
                component={HOME.component}
                initialParams={{data: userData}} 
                name= {HOME.name}
            />
            <BottomTab.Screen  
                //listeners={ ({ route }) => tabListenerFn(route)}
                component={ROSTER.component} 
                initialParams={{data: userData}}
                name={ROSTER.name}
            /> 
            <BottomTab.Screen  
                //listeners={ ({ route }) => tabListenerFn(route)}
                component={MESSAGE.component} 
                initialParams={{data: userData}}
                name={MESSAGE.name} 
            />   
            <BottomTab.Screen  
                //listeners={ ({ route }) => tabListenerFn(route.name)}
                component={PROFILE.component} 
                initialParams={{data: userData}}
                name={PROFILE.name} 
            />   
        </BottomTab.Navigator>
    )
}

