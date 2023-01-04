import oddam from "../../assets/oddam.png";
import kosmo from "../../assets/kosmo.png";
import todo from "../../assets/todo.png";
import car from "../../assets/car_menu.png";
import bestshop from "../../assets/bestshop.png";
import portoflio from "../../assets/portfolio.png";

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
        title: 'To-do',
        body: 'Prosta aplikacja todo, praca nad State w React.js (React.js + Sass)',
        github: 'https://github.com/Kgiruc/todo_react',
        demo:'https://todo-af9e0.web.app/',
         img: todo,
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
        github: 'https://github.com/Kgiruc/website-oddam/tree/master/oddam',
        demo:'https://oddam-website-dbd0b.web.app',
         img: portoflio,
        type: 'website',
        id: 6,
    },
]

export default ProjectsAll;