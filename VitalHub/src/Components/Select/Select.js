import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const InputSelect = () => {
  return (
    <View style={{ width : 316 }}>
      <RNPickerSelect
        style={style}
        Icon={() => {
          return <FontAwesomeIcon icon={faCaretDown} color='#34898F' size={22}/>
        }}
        placeholder={{
          label : 'Selecionar horário',
          value : null,
          color : '#34898F'
        }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "1", value: "" },
          { label: "2", value: "" },
          { label: "3", value: "" },
          { label: "4", value: "" },
          { label: "5", value: "" },
          { label: "6", value: "" },
        ]}
      />
    </View>
  )
}

const style = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding : 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignContent: 'center',
    alignItems : 'center',
    justifyContent : 'center',
    fontFamily : 'MontserratAlternates_600SemiBold'
  },
  inputAndroid: {
    fontSize: 16,
    padding : 16,
    borderWidth: 2,
    borderColor: '#60BFC5',
    borderRadius: 5,
    color: '#34898F',
    alignItems: 'center',
    justifyContent : 'center',
    
    fontFamily : 'MontserratAlternates_600SemiBold'
  },
  iconContainer : {
    top : '25%',
    marginRight : 10
  },
  placeholder : {
    color: '#34898F',
  }
})

export default InputSelect