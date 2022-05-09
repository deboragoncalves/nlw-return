import tailwind from "tailwind-styled-components";

/* Criar ternário caso não seja passado a propriedade text. 
Adicionar ? na propriedade da interface FooterProps */

interface FooterProps {
    text?: string;
}

let textFooterDefault = "Feito com ♥ pela Rocketseat";

const Footer = tailwind.footer`
    text-xs 
    text-neutral-400
`;

export function WidgetFooter(props: FooterProps) {
    return (
        <Footer className="">
            {props.text ?? textFooterDefault}
        </Footer>
    );
}