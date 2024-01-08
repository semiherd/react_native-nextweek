import React from 'react';
import { Shift } from './sections/shift/index';
import { Activity } from './sections/activity/index';
import { Overview } from './sections/overview/index';
import {Item} from '../type/type.roster'

const SwitchContent = ({id}:{id:Item['id']}) => {	
   switch(id){
      case 'overview':
         return <Overview />
      case 'shift':
         return <Shift />
      case 'activity':
         return <Activity />
      default :
         return null;
   }
}

export default SwitchContent