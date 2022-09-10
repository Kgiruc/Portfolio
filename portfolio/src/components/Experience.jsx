import {useState} from "react";

function Experience() {
    const [isHover, setIsHover] = useState(false);

    return (
        <article className="experience__container">
        <span
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            {isHover ? "nope"  : "SurfBurger" }
        </span><span
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            {isHover ? "nope"  : "Teleakces" }
        </span><span
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            {isHover ? "nope"  : "Global gsm" }
        </span>
        </article>
    );
}

export default Experience;