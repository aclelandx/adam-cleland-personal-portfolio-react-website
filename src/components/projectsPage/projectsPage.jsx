import ProjectTile from "./projectTile";
import projectContent from "./projectContent";


function ProjectsPage(){
    return (
        <section className="projectPage">
            <ProjectTile {...projectContent.reConnect}/>
            <ProjectTile {...projectContent.orbit}/>
            <ProjectTile {...projectContent.cms}/>
            <ProjectTile {...projectContent.noteTaker}/>
            <ProjectTile {...projectContent.dayPlanner}/>
            <ProjectTile {...projectContent.codingQuiz}/>
        </section>
    )
}

export default ProjectsPage