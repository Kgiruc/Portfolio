import {useState} from "react";

function Experience() {
    const [isHover, setIsHover] = useState(false);

    return (
        <article className="experience__container">
        <span
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            {isHover ? "nope"  : "SurfBurger" }
        </span>
        <span>Teleakcess Galeria Morena</span>
        <span>Global GSM</span>
        </article>
    );
}

export default Experience;