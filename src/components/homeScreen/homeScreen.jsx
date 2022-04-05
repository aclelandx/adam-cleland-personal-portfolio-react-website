import profilePicture from '../../images/me.png'
import AboutMe from './aboutMe/aboutMe'

function HomeScreen() {
    return (
        <section className="homepage">
            <article className='homepageLeft'>
                <img src={profilePicture} alt="Adam Cleland Web Developer" />
            </article>
            <AboutMe />
        </section>
    )
};

export default HomeScreen