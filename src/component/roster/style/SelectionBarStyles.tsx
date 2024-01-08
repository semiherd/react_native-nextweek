
import {StyleSheet,Dimensions} from 'react-native';
import { Color } from '../../../asset/constant/Color'
const {width,height} = Dimensions.get('window')

type StyleProps={
  activeIndex: number
  index: number
  itemSize: number
}

const styles= ({activeIndex,index,itemSize}:StyleProps) => StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: 'teal',
    borderRadius: 20,
    width: itemSize,
    height: itemSize,
    backgroundColor: activeIndex===index? Color.blue:Color.black30,
    marginHorizontal: width * 0.01,
    marginVertical: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;


  