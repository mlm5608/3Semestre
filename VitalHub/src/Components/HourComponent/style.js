
import { HourBox } from "../Box/style";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { HourText } from "../HourText/style";


export const HourComponent = ({
    color,
    Time,
    listAg = true
}) => {
    return (
        <HourBox listAg={listAg}>

            <MaterialCommunityIcons name="clock" size={14} color={listAg ? '#49B3BA': '#4E4B59'} />
            <HourText listAg={listAg}>{Time}</HourText>

        </HourBox>
    );
};
