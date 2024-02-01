import { InputText } from "./style"

export const Input = ({editable, fieldValue, onChangeText, keyType, maxLength, placeholder}) => {
    return(
        <InputText
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />
    )
}