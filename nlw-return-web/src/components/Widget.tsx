import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
    /*  Tailwind: 
            - w-6 = 1 representa 4px
            - px: padding lateral, eixo x
    */ 
    return (
        <button className="bg-violet-500 rounded full px-3 h-12 text-white">
            <ChatTeardropDots className="w-6 h-6" />
        </button>
    )
}