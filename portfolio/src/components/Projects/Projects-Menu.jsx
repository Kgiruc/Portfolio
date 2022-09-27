import {useState} from "react";
import ProjectsAll from "./ProjectsList.jsx";

function ProjectsMenu() {
    const [state, setState] =useState(ProjectsAll);
    return (
        <>
            {
                state.map((item) => {
                    return <section className="projects__menu__container" key={item.id}>
                        <img className="projects__menu__img" src={item.img} alt="planet" />
                        <article className="projects__menu__subs">
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </article>
                    </section>
                })
            }
        </>
    );
}

export default ProjectsMenu;