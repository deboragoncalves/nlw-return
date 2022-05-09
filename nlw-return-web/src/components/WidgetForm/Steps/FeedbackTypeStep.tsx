import { FeedbackType } from "..";
import tailwind from "tailwind-styled-components";

// Quando é uma função passada como props, devo declarar o tipo de parâmetro e de retorno
// Componente recebe como props o objeto com os itens do feedback e a função de set do useState

interface FeedbackTypeStepProps {
    feedbackTypes: Object;
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

const ContainerFeedbackStep = tailwind.div`
    flex 
    py-8 
    gap-2 
    w-full
`;

const ButtonFeedback = tailwind.button`
    bg-zinc-800 
    rounded-lg 
    py-5 
    w-24 
    flex-1 
    flex 
    flex-col 
    items-center 
    gap-2 
    border-2 
    border-transparent 
    hover:border-brand-500 
    focus:border-brand-550 
    focus:outline-none
`;

export function FeedbackTypeStep(prop: FeedbackTypeStepProps) {
    let feedbackTypes = prop.feedbackTypes;

    return (
        <ContainerFeedbackStep>
            {Object.entries(feedbackTypes).map(feedbackArray => {
                let feedback = feedbackArray[0];
                let feedbackItems = feedbackArray[1];

                return (
                    <ButtonFeedback
                        key={feedback}
                        onClick={() => prop.onFeedbackTypeChanged(feedback as FeedbackType)}
                    >
                        <img src={feedbackItems.image.source} alt={feedbackItems.image.alt}></img>
                        <span>{feedbackItems.title}</span>
                    </ButtonFeedback>
                );
            }) }
        </ContainerFeedbackStep> 
    );
}