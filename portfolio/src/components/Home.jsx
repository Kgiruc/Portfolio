import Experience from "./Experience.jsx";
import ProjectsMenu from "./Projects/Projects-Menu.jsx";
import Contact from "./Contact.jsx";
import Background from "./background/Background.jsx";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Technology from "./Projects/Technology.jsx";

function Home() {
    useEffect(() => {
        Aos.init({ duration: 1000});
    }, [])
    return (
        <div className="home__container">
            <Background  />
            <main data-aos="zoom-out-up">
                <h1>O mnie</h1>
                <article className="home main__article">
                    Lubię pracować blisko narzuconego projektu i opracowywać go co do pixela.
                    Wiele radości sprawia mi uczenie się nowych rzeczy i podążanie wraz z nowymi technologiami.
                    Codziennie staram się podpatrywać sposób pisania kodu developerów i wprowadzać je w swoje projekty.
                </article>
                <h2>Techniczne</h2>
                <section className="home__section tech">
                    Obecnie zaciekawiłem się połączeniem mikrokontrolerów z
                    Javascriptem i tworzeniem różnych czujników interaktywnych
                    (połączonych z bazą danych w Firebase). Przeważnie pracuję
                    więcej z React.js niż z czystą wersją JavaScript. Jeśli chodzi o
                    stylowanie nie używam czystego CSS, preferuję Sass'a i Tailwinda.
                </section>
                <h3>Personalne</h3>
                <section className="home__section per">
                    Jestem Serwisantem i byłym studentem na kierunku Komputerowe systemy sterowania. Studia przerwałem
                    na ostatnim roku, by bardziej zagłębić wiedzę w kierunku typowo programistycznym.
                    Bazowałem na językach C, C++, FBD. Obecnie poszerzam wiedzę z języków które wyrażają moją kreatywność.
                </section>
            </main>
            <Technology />
            <Experience />
            <ProjectsMenu />
            <Contact />
        </div>
    );
}

export default Home;