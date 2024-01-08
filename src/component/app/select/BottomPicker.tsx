import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './spinselector/style/BottomPickerStyles';

const BottomPicker= ({selectedValue,handleChange,options,id}) => {
//const[selectedOption,setOption]= useState(options.data.indexOf(selectedValue.title))
    
    return (
        <TouchableOpacity style={styles.container}>
            <Picker
                selectedValue= {selectedValue.title}
                style={{width:'100%'}}
                onValueChange={(value) => handleChange(id,value)}
            >   
                {options.data.map((value, index) => {
                    return(
                        <Picker.Item 
                            label={value}
                            value={value}
                            key={index.toString()}
                        />
                    )
                })}  
            </Picker>
        </TouchableOpacity> 
        
    )
}

export default BottomPicker