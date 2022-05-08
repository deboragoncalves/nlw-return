import { useState } from "react";

import { WidgetFooter } from "../WidgetFooter";
import { WidgetHeader } from "../WidgetHeader";

import bugImage from "../../images/bug.svg";
import ideaImage from "../../images/idea.svg";
import thoughtImage from "../../images/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

/*
    Tailwind:

    - rounded-2xl: border-radius 16px
    - pra definir uma width dinâmica, usar colchetes w-[calc()]. dentro da função calc, sem espaços entre elementos
    - responsividade: utilizar os tamanhos de tela (sm, md, lg - small, medium, large) e a partir desse tamanho, a classe será ativada
    md:w-auto
    - gap-2: espaço entre os elementos de 8px
    - py: padding top e bottom
    - w-full: width 100%

    - Objeto feedbackTypes: mais fácil de adicionar/remover elementos
    - criar objeto imagem, para ter tanto o src quanto o alt
    - Object.entries: retorna um array de array's. cada array filho tem dois elementos: o primeiro é a chave e o segundo é valor do objeto
    - map: percorre o array e retorna um novo elemento    
    - quando se usa map no React, o item que retorna precisa ter um atributo key, que deve ser único para cada elemento, podendo ser id, um documento, etc
    - através desse atributo key, o React diferencia cada um dos elementos
    - outline-none: retira a borda que vem como default do browser
    
    - onClick deve receber apenas uma função. se passar algum parâmetro, estarei já executando. corrigir usando arrow function
    - typeof retorna a estrutura do objeto
    - determinar que o estado vai armazenar dados do tipo FeedbackType ou null
*/

export function WidgetForm() {  
    const feedbackTypes = {
        BUG: {
            title: "Problema",
            image: {
                source: bugImage,
                alt: "Feedback sobre um problema"
            }
        },
        IDEA: {
            title: "Ideia",
            image: {
                source: ideaImage,
                alt: "Feedback sobre uma ideia"
            }
        }, 
        OTHER: {
            title: "Outro",
            image: {
                source: thoughtImage,
                alt: "Feedback sobre outro tema"
            }
        }
    }

    type FeedbackType = keyof typeof feedbackTypes;

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <WidgetHeader title="Deixe seu feedback"></WidgetHeader>

            {!feedbackType ?
                <FeedbackTypeStep feedbackTypes={feedbackTypes} onFeedbackTypeChanged={setFeedbackType} />           
            : null}

            <WidgetFooter></WidgetFooter>
        </div>
    );
}