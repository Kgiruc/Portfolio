import ProjectsMenu from "./Projects-Menu.jsx";

function ProjectsButtons() {
    return (
        <div className="projects__container">
            <button value="All" className="projects__buttons">All</button>
            <button value="website" className="projects__buttons">Websites</button>
            <button value="Application" className="projects__buttons">Applications</button>
            <div>
                <ProjectsMenu />
            </div>
        </div>

    );
}

export default ProjectsButtons;