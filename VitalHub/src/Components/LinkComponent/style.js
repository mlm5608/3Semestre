import {LinkCard} from '../Link/style'

export const LinkComponent =({
    listFunction,
    title
}) => {
    <LinkCard listFunction={listFunction}>{title}</LinkCard>
}