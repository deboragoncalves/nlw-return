import { FormEvent, useState } from "react";

import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";
import tailwind from "tailwind-styled-components";

/*
    - a função html2canvas tira o print da tela de acordo com o elemento passado por parâmetro
    - como está sendo selecionado o html, ele nunca será nulo, forçar para pegar o elemento com !
    - arrow function não aceita palavra chave async antes
    - toDataURL - converte para imagem base 64 (imagem em forma de text), no formato png
    - quando estiver tirando o print, mostrar loading
    - comunicação entre componentes: enviar uma função como propriedade para um componente e esse componente executa a função e envia a info para o componente pai
    - style: duas chaves, uma pra indicar que é código JS e outra para iniciar o objeto do style
*/

interface ScreenshotButtonProps {
    setScreenshot: (screenshoot: string) => void;
    screenshot: string;
}

const ButtonTrash = tailwind.div`
    p-1 
    w-10 
    h-10 
    rounded-md 
    border-transparent 
    flex 
    justify-end 
    items-end 
    text-zinc-400 
    hover:text-zinc-100
`;

const ButtonScrenshot = tailwind.button`
    p-2 
    bg-zinc-800 
    border-transparent 
    rounded-md 
    hover:bg-zinc-700 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-offtet-brand-500
`;


export function ScreenshotButton(prop: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
    
    let screenshoot = prop.screenshot;

    async function takeScreenshot(event: FormEvent) {
        event.preventDefault();

        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector("html")!);
        const base64Image = canvas.toDataURL("image/png");

        prop.setScreenshot(base64Image);
        setIsTakingScreenshot(false);
    }

    if (screenshoot) {
        return (
            <ButtonTrash
                style={{
                    backgroundImage: `url(${screenshoot})`,
                    backgroundPosition: "right bottom",
                    backgroundSize: 180
                }}>
                <Trash
                    onClick={() => prop.setScreenshot('')}
                    weight="fill" />
            </ButtonTrash>
        )
    }

    return (
        <ButtonScrenshot onClick={takeScreenshot}>
            { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc" />}
        </ButtonScrenshot>
    ); 
}