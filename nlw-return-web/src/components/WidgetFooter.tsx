interface FooterProps {
    text?: string;
}

let textFooterDefault = "Feito com ♥ pela Rocketseat";

/* Criar ternário caso não seja passado a propriedade text. 
Adicionar ? na propriedade da interface FooterProps */

export function WidgetFooter(props: FooterProps) {
    return (
        <footer className="text-xs text-neutral-400">
            {props.text ?? textFooterDefault}
        </footer>
    );
}