import React from "react"
import { Dimensions } from 'react-native'
import { ImageSource } from '../image/type.image'
import ImageItem from '../image/ImageItem'

const {width,height}= Dimensions.get('window')

export const loadMoreIcon= (image: ImageSource) => <ImageItem width={width*0.05} height={width*0.05} image={image} />
