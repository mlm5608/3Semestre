import { TouchableOpacity } from 'react-native'
import { LinkCard } from '../Link/style'

export const LinkComponent = ({
    listFunction = "pendente",
    functionButton
}) => {
    return (
        <TouchableOpacity onPress={functionButton}>
            <LinkCard listFunction={listFunction}> {listFunction === "pendente" ? "Cancelar" : listFunction === "realizado" ? "Ver Prontuário" : ""}</LinkCard>
        </TouchableOpacity>
    )
}