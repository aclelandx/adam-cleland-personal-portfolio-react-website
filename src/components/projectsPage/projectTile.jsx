

const hostChecker = (hosted, rLink, lLink) => {
    if (hosted) {
        return (
            <section className="projectLinks">
                <a href={rLink} className='githubLink' target='_blank' rel="noreferrer">GitHub</a><a href={lLink} className='liveLink' target='_blank' rel="noreferrer">Deployed</a>
            </section>)
    } else {return (<section className="projectLinks"><a href={rLink} className='githubLink' target='_blank' rel="noreferrer">GitHub</a></section>)}
}   

function ProjectTile({projectClass, bgImage, imageAlt, title, lang, repoLink, liveLink, isHosted}){
    return(
        <figure style={bgImage} className={projectClass} alt={imageAlt}>
            <article className="projectBio">
                <h4>{title}</h4>
                <h5>{lang}</h5>
                <hr />
                {hostChecker(isHosted, repoLink, liveLink)}
            </article>
        </figure>
    )
}

export default ProjectTile