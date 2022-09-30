import {useState} from "react";
import ProjectsAll from "./ProjectsList.jsx";
import monitor from "../../assets/icons/monitor.png";
import github_logo from "../../assets/icons/github.png";

function ProjectsMenu() {
    const [state, setState] = useState(ProjectsAll);

    const handleButtons = (e) => {
        let word = e.target.value;

        if (word === 'all') {
            setState(ProjectsAll);
            IsActive(true);
        } else if (word === 'applications') {
            const filtered = ProjectsAll.filter(item => item.type === 'application');

            setState(filtered)
        } else if (word === 'websites') {
            const filtered = ProjectsAll.filter(item => item.type === 'website');

            setState(filtered)
        }
    }
    return (
        <div className="projects__container">
            <button value="all" className="projects__buttons" onClick={handleButtons}>
                All
            </button>
            <button value="websites" className="projects__buttons" onClick={handleButtons}>
                Websites
            </button>
            <button value="applications" className="projects__buttons" onClick={handleButtons}>
                Applications
            </button>

            <div className="item">
                {
                    state.map((item) => {
                        return <section className="projects__menu__container" key={item.id}>
                            <img className="projects__menu__img" src={item.img} alt="screenshot"/>
                            <article className="projects__menu__subs">
                                <span>{item.title}</span>
                                <p>{item.body}</p>
                                <div className="projects__links">
                                    <a href={item.demo} target="_blank"><img src={monitor} alt="demo"/></a>
                                    <a href={item.github} target="_blank"><img src={github_logo} alt="github"/></a>
                                </div>
                            </article>
                        </section>
                    })
                }
            </div>
        </div>
    );
}

export default ProjectsMenu;