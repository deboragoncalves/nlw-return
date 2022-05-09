/* 
    - Typescript: criar interface para tipar as propriedades do Header
    - text-xl: texto com fonte 20px
    - leading-6: line-height 24px
*/

import { CloseButton } from "./CloseButton";

interface HeaderProps {
    title?: string;
}

export function WidgetHeader(props: HeaderProps) {
    return (
        <div>
            <span className="text-xl leading-6">{props.title ?? ''}</span>
            <CloseButton />
        </div>
    );
}