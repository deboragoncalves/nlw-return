import { FormEvent, useState } from "react";

import { FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";
import { WidgetHeader } from "../../WidgetHeader";
import { ArrowLeft } from "phosphor-react";
import { ScreenshotButton } from "../ScreenshotButton";

/* 
    - scrollbar thin: mais fino
    - ring: borda ao redor
    - ring-1: largura da borda
    - tailwindcss/forms: cria estilos padrões para os forms
    - mostrar preview do print: criar estado screenshot, sendo string ou null
*/

interface FeedbackContentStepProps {
    feedbackTypes: any;
    feedbackType: FeedbackType;
    restartFeedback: () => void;
    setFeedbackSent: (feedbackSent: boolean) => void;
}

export function FeedbackContentStep(prop: FeedbackContentStepProps) {
    let feedbackTypesObject = prop.feedbackTypes;
    let feedback = prop.feedbackType;
    let feedbackTitle = feedbackTypesObject[feedback].title;
    let feedbackImageSource = feedbackTypesObject[feedback].image.source;
    let feedbackImageAlt = feedbackTypesObject[feedback].image.alt;

    let messagePlaceholder = "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!";

    const [screenshoot, setScreenshot] = useState<string>("");
    const [comment, setComment] = useState<string>("");

    function submitFeedback(event: FormEvent) {
        event.preventDefault();

        console.log("Image base64: ");
        console.log(screenshoot);
        console.log("Feedback: ");
        console.log(comment);

        prop.setFeedbackSent(true);
    }

    return (
        <>
            <button onClick={prop.restartFeedback} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
            <div className="flex items-center gap-2 mx-10">
                <img src={feedbackImageSource} alt={feedbackImageAlt} />
                <WidgetHeader title={feedbackTitle} />
                <CloseButton />
            </div>

            <form onSubmit={submitFeedback}className="my-4 w-full">
                <textarea
                    onChange={event => setComment(event.target.value)}
                    placeholder={messagePlaceholder}
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent roudend-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"></textarea>
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton screenshot={screenshoot} setScreenshot={setScreenshot} />
                    <button
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offtet-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
                        disabled={comment.length == 0}
                        type="submit">
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    );
}