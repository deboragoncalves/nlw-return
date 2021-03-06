import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";
import tailwind from "tailwind-styled-components";

/*  
    Tailwind: 
        - w-6 = 1 representa 4px
        - px: padding lateral, eixo x

    React:
        - className
        - nome componente sempre inicia com letra maiuscula
        - escrever JS dentro do HTML: {}
        - acessibilidade: atributo aria-expanded tem valor true/false e indica para o leitor de tela que o item está aparecendo ou não
        - libs criam esse atributo automaticamente e facilitam a navegabilidade
*/

const TextFeedback = tailwind.span`
    px-2 
    hidden 
    group-hover:block 
    transition-all 
    duration-500 ease-linear
`;

export function Widget() {
    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 group flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
            <Popover.Button className="bg-violet-500 rounded full px-3 h-12 text-white flex items-center">
                <ChatTeardropDots className="w-6 h-6" />
                <TextFeedback>Feedback</TextFeedback>
            </Popover.Button>
        </Popover>
    )
}