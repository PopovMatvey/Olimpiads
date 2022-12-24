import "../css/Button.css"
import { useOutData } from "../hook/outputData";


interface ModalProps {
    parText: string;
    parHref: string;
}



export function Button({ parText,parHref }: ModalProps) {
    const {fetchData } = useOutData(parHref);

    function onClick(parHref: string) {
        fetchData(parHref);
    }

    return (
        <a href={parHref} onClick={event => onClick(parHref)}>
            {parText}
        </a>
    )
}