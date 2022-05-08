interface FeedbackTypeStepProps {
    feedbackTypes: Object;
    onFeedbackTypeChanged: (type: any) => void;
}

// Quando é uma função passada como props, devo declarar o tipo de parâmetro e de retorno
// Componente recebe como props o objeto com os itens do feedback e a função de set do useState

export function FeedbackTypeStep(prop: FeedbackTypeStepProps) {
    let feedbackTypes = prop.feedbackTypes;

    type FeedbackType = keyof typeof feedbackTypes;

    return (
        <div className="flex py-8 gap-2 w-full">
            {Object.entries(feedbackTypes).map(feedbackArray => {
                let feedback = feedbackArray[0];
                let feedbackItems = feedbackArray[1];

                return (
                    <button
                        key={feedback}
                        onClick={() => prop.onFeedbackTypeChanged(feedback as FeedbackType)}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-550 focus:outline-none"
                    >
                        <img src={feedbackItems.image.source} alt={feedbackItems.image.alt}></img>
                        <span>{feedbackItems.title}</span>
                    </button>
                );
            }) }
        </div> 
    );
}