import { WidgetFooter } from "./WidgetFooter";
import { WidgetHeader } from "./WidgetHeader";

export function WidgetForm() {
    /*
        Tailwind:

        - rounded-2xl: border-radius 16px
        - pra definir uma width dinâmica, usar colchetes w-[calc()]. dentro da função calc, sem espaços entre elementos
        - responsividade: utilizar os tamanhos de tela (sm, md, lg - small, medium, large) e a partir desse tamanho, a classe será ativada
        md:w-auto
        - gap-2: espaço entre os elementos de 8px
        - w-full: width 100%

    */
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <WidgetHeader title="Deixe seu feedback"></WidgetHeader>

            <div className="flex py-8 gap-2 w-full"></div>
            <WidgetFooter></WidgetFooter>
        </div>
    );
}