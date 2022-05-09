import { CloseButton } from "./CloseButton";
import tailwind from "tailwind-styled-components";

/* 
    - Typescript: criar interface para tipar as propriedades do Header
    - text-xl: texto com fonte 20px
    - leading-6: line-height 24px
*/

interface HeaderProps {
    title?: string;
}

const TitleHeader = tailwind.span`
    text-xl 
    leading-6
`;

export function WidgetHeader(props: HeaderProps) {
    return (
        <div>
            <TitleHeader>{props.title ?? ''}</TitleHeader>
            <CloseButton />
        </div>
    );
}