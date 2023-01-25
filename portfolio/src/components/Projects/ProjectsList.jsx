import oddam from "../../assets/oddam.png";
import kosmo from "../../assets/kosmo.png";
import ip from "../../assets/ip.png";
import car from "../../assets/car_menu.png";
import bestshop from "../../assets/bestshop.png";
import portoflio from "../../assets/portfolio.png";
import dbmicro from "../../assets/dbmicro.png";

const ProjectsAll = [
    {
        title: 'Website-oddam',
        body: 'layout strony do pomagania potrzebującym (React.js + Sass)',
        github: 'https://github.com/Kgiruc/website-oddam/tree/master/oddam',
        demo:'https://oddam-website-dbd0b.web.app',
         img: oddam,
        type: 'website',
        id: 1,
    },
    {
        title: 'Website-cosmo',
        body: 'Strona przedstawiająca planety i kosmos (React.js + Sass)',
        github: 'https://github.com/Kgiruc/space-website/tree/main/space',
        demo:'https://kosmo-71a54.web.app',
         img: kosmo,
        type: 'website',
        id: 2,
    },
    {
        title: 'IP-Tracker',
        body: 'Aplikacja renderująca mape gdzie znajduje się firma(ip firmy) (JS + Tailwind)',
        github: 'https://github.com/Kgiruc/iptracker',
        demo:'https://iptracker-cbde5.web.app',
         img: ip,
        type: 'application',
        id: 3,
    },
    {
        title: 'car-menu',
        body: 'Podstawowe widgety i nawigacja (React.js + Sass only PC)',
        github: 'https://github.com/Kgiruc/website-oddam/tree/master/oddam',
        demo:'https://car-menu-c07e2.web.app/',
         img: car,
        type: 'application',
        id: 4,
    },
    {
        title: 'Website-bestshop',
        body: 'Strona firmy bestshop z promocjami (Html + Sass)',
        github: 'https://github.com/Kgiruc/bestshop',
        demo:'https://bestshop-3160d.web.app/',
         img: bestshop,
        type: 'website',
        id: 5,
    },
    {
        title: 'Website-portfolio',
        body: 'moje portfolio z użyciem Three.js (React.js + Three.js + Sass)',
        github: 'https://github.com/Kgiruc/portfolio/tree/main/portfolio',
        demo:'https://portfolio-f3498.web.app',
         img: portoflio,
        type: 'website',
        id: 6,
    }, {
        title: 'Website-portfolio',
        body: 'Aplikacja smartdom z bazą danych w firebase (React.js + Tailwind + firebase)',
        github: 'https://github.com/Kgiruc/smartdom/tree/main/smartdom',
        demo:'https://dbmicro-84106.web.app/',
         img: dbmicro,
        type: 'application',
        id: 7,
    },
]

export default ProjectsAll;