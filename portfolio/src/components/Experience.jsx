import {useState} from "react";

function Experience() {
    const [isHover, setIsHover] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);

    return (
        <article className="experience__container">
        <span
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            {isHover ? "Składanie burgerów, praca w większej grupie, współpraca, odpowiedzialność za" +
                "powierzone zadania "  : "SurfBurger" }
        </span><span
            onMouseEnter={() => setIsHover2(true)}
            onMouseLeave={() => setIsHover2(false)}>
            {isHover2 ? "Naprawiane telefonów, sprzedaż akcesoriów, praca z oprogramowaniem smartfonów"
                : "Teleakces" }
        </span><span
            onMouseEnter={() => setIsHover3(true)}
            onMouseLeave={() => setIsHover3(false)}>
            {isHover3 ? "Naprawianie telefonów, dokonywanie zmian w oprogramowaniu smartfonów"
                : "Global GSM" }
        </span>
        </article>
    );
}

export default Experience;