import {useEffect, useState} from "react";
import burger from "../assets/icons/burger.png";
import smartphone from "../assets/icons/smartphone.png";
import telephone from "../assets/icons/telephone.png";
import Aos from "aos";

function Experience() {
    const [isHover, setIsHover] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <article className="experience__container" data-aos="slide-right">
        <span
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {isHover ? "Praca w większej grupie, współpraca, odpowiedzialność za powierzone " +
                "zadania " : "SurfBurger "}<img src={burger} alt='burger' className='icons'/>
        </span>
            <span
                onMouseEnter={() => setIsHover2(true)}
                onMouseLeave={() => setIsHover2(false)}
            >
            {isHover2 ? "Naprawiane telefonów, sprzedaż akcesoriów, praca z oprogramowaniem smartfonów, praca z klientem"
                : "Teleakces"}<img src={smartphone} alt='smartphone' className='icons'/>
        </span>
            <span
                onMouseEnter={() => setIsHover3(true)}
                onMouseLeave={() => setIsHover3(false)}
            >
            {isHover3 ? "Naprawianie telefonów, dokonywanie zmian w oprogramowaniu smartfonów, praca z klientem"
                : "Global GSM"}<img src={telephone} alt='telephone' className='icons'/>
        </span>
        </article>
    );
}

export default Experience;