import {useEffect} from "react";
import Aos from "aos";

function FixBlock() {
    useEffect(() => {
        Aos.init({ duration: 2500});
    }, [])

    return (
        <div className="fixblock__container" data-aos="slide-right">
            <h1>Cześć. Jestem frontend developerem.</h1>
            <span>Mam na imię Karol Giruć. Uwielbiam tworzyć nowe i ciekawe rzeczy.</span>
            <button className="fixblock__button"> Zacznijmy pracować razem!</button>
            <footer>
                <a href="https://github.com/Kgiruc" target="_blank">Github</a> and <a href="https://www.linkedin.com/in/karol-giruc/" target="_blank">LinkedIn</a>
            </footer>
        </div>
    );
}

export default FixBlock;