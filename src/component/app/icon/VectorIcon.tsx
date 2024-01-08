import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OcticonIcons from 'react-native-vector-icons/Octicons';
import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconFamily= 'fontisto' | 'material' | 'evil' | 'feather' | 'ant' | 'simpleLine' | 'foundation' | 'fontawesome5' | 'fontawesome' | 'ionicon' | 'materialCommunity' | 'entypo' | 'octicon'

type IconProps={
    type:IconFamily
    name:string
    color: string
    size: number
}

const getIcon = (type:IconFamily) =>{   
    switch (type) {
        case 'fontisto':
            return Fontisto;
        case 'material':
            return MaterialIcons;
        case 'evil':
            return EvilIcon;
        case 'feather':
            return Feather;
        case 'ant':
            return AntDesign;
        case 'simpleLine':
            return SimpleLineIcons;
        case 'foundation':
            return FoundationIcons;
        case 'fontawesome5':
            return FAIcon5;
        case 'fontawesome':
            return FAIcon;
        case 'ionicon':
            return Ionicon;
        case 'materialCommunity':
            return MaterialCommunityIcons;
        case 'entypo':
            return EntypoIcons;
        case 'octicon':
            return OcticonIcons;
        default:
            return null
    }
}

const VectorIcon = (props:IconProps):(React.JSX.Element|null) => {   
    const FontIcon = getIcon(props.type);
    if(FontIcon===null) return null
    return <FontIcon size={props.size} name={props.name} color={props.color} />  
}

export default VectorIcon