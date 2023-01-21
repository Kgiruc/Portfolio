import {useEffect} from "react";
import Aos from "aos";
import {Link} from 'react-scroll'
import download from "../assets/icons/download-pdf.png";



const cvDownload = () => {
    fetch('CV.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CV.pdf';
            alink.click();
        })
    })
}
function FixBlock() {
    useEffect(() => {
        Aos.init({ duration: 2500});
    }, [])

    return (
        <div className="fixblock__container" data-aos="slide-right">
            <h1>Cześć. Jestem frontend developerem.</h1>
            <span>Mam na imię Karol Giruć. Uwielbiam tworzyć nowe i ciekawe rzeczy.</span>
            <Link  className="fixblock__button" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                 Zacznijmy pracować razem!
            </Link>
            <footer>
                <a href="https://github.com/Kgiruc" target="_blank">Github </a>
                and
                <a href="https://www.linkedin.com/in/karol-giruc/" target="_blank"> LinkedIn</a>
                <button className="footer__button" onClick={cvDownload} type="button">
                    <img src={download} alt="download cv"/>
                </button>
            </footer>
        </div>
    );
}

export default FixBlock;