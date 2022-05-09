import { CircleNotch } from "phosphor-react";
import tailwind from "tailwind-styled-components";

const ContainerLoading = tailwind.div`
    w-6 
    h-6 
    flex 
    items-center 
    justify-center 
    overflow-hidden
`;

export function Loading() {
    return (
        <ContainerLoading>
            <CircleNotch className="w-4 h-4 animate-spin" weight="bold" />
        </ContainerLoading>
    );
}