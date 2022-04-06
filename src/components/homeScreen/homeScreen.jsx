import AboutMe from './aboutMe/aboutMe'
import HeroSection from './heroSection/heroSection'

function HomeScreen() {
    return (
        <section className="homepage">
            <article className='homepageLeft'>
                <HeroSection />
            </article>
            <article className='homepageRight'>
                <AboutMe />
            </article>
        </section>
    )
};

export default HomeScreen