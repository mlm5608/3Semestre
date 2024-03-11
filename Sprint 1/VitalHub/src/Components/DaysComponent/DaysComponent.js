import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DaysBox, DaysText } from './style';

export const DaysComponent = ({
    Days
}) => {
    return (
        <DaysBox>
            <MaterialCommunityIcons name="calendar" size={14} color="#49B3BA" />
            <DaysText>{Days}</DaysText>
        </DaysBox>
    )
}