import { useState } from "react";

import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { Loading } from "../Loading";

/*
    - a função html2canvas tira o print da tela de acordo com o elemento passado por parâmetro
    - como está sendo selecionado o html, ele nunca será nulo, forçar para pegar o elemento com !
    - arrow function não aceita palavra chave async antes
    - toDataURL - converte para imagem base 64 (imagem em forma de text), no formato png
    - quando estiver tirando o print, mostrar loading
*/

export function ScreenshotButton() {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
    
    async function takeScreenshot() {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector("html")!);
        const base64Image = canvas.toDataURL("image/png");

        setIsTakingScreenshot(false);
    }
    return (
        <button onClick={takeScreenshot} className="p-2 bg-zinc-800 border-transparent rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offtet-brand-500">
            { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc" />}
        </button>
    ); 
}