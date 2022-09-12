import Experience from "./Experience.jsx";

function Home() {
    return (
        <div className="home__container">
            <main>
                <h1>O mnie</h1>
                <article className="home main__article">
                    Lubię pracować blisko narzuconego projektu i opracowywać go co do pixela.
                    Wiele radości sprawia mi uczenie się nowych rzeczy i podążanie wraz z nowymi technologiami.
                    Codziennie staram się podpatrywać sposób pisania kodu developerów i wprowadzać je w swoje projekty.
                </article>
                <h2>Techniczne</h2>
                <section>
                    Obecnie zaciekawiłem się Three.js, staram się projektować różne animacje z nim związane. Przeważnie
                    pracuję więcej z React.js niż z czystą wersją Javascripta. Jeśli chodzi o stylowanie wogle nie
                    używam
                    czystego css, preferuję Sass'a i pomału ucze się Tailwinda.
                </section>
                <h3>Personalne</h3>
                <section>
                    Jestem Serwisantem i byłym studentem na kierunku Komputerowe systemy sterowania. Studia przerwałem
                    na ostatnim roku, by bardziej zagłębić wiedzę w kierunku typowo programistycznym.
                    Bazowałem na językach C, C++, FBD. Obecnie poszerzam wiedzę z języków którą wyrażają moją kreatywność.
                </section>
            </main>
            <Experience />
        </div>
    );
}

export default Home;