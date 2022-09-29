import {useState} from "react";
import ProjectsAll from "./ProjectsList.jsx";
import monitor from "../../assets/icons/monitor.png";
import github_logo from "../../assets/icons/github.png";

function ProjectsMenu() {
    const [state, setState] =useState(ProjectsAll);
    return (
        <>
            {
                state.map((item) => {
                    return <section className="projects__menu__container" key={item.id}>
                        <img className="projects__menu__img" src={item.img} alt="screenshot" />
                        <article className="projects__menu__subs">
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                            <div className="projects__results">
                                <a href={item.demo} target="_blank"><img src={monitor} alt="demo"/></a>
                                <a href={item.github} target="_blank"><img src={github_logo} alt="github"/></a>
                            </div>
                        </article>
                    </section>
                })
            }
        </>
    );
}

export default ProjectsMenu;