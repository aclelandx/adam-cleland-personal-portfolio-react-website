import cmsLogo from "../../images/cmsLogo.svg";
import noteTakerLogo from "../../images/noteTaker.svg"
import group1Logo from "../../images/GroupProject1OrbitalDictionary.png"
import dayPlannerLogo from "../../images/DayPlannerPhoto.png"
import codingQuizLogo from "../../images/TimedCodingQuizScreenshot.png"
import reConnectLogo from "../../images/familyReconnect.svg"

const projectContent = {
    reConnect: {
        bgImage: { backgroundImage: `url(${reConnectLogo})` }, projectClass: `project1`,
        imageAlt: `Logo for the ReConnect Group project`,
        title: `Family Reconnect`,
        lang: `MVC, Handlebars, Sequelize`,
        repoLink: `https://github.com/ckyser1/Project-2-Family_Reconnect_Board`,
        liveLink: `https://reconnect-1.herokuapp.com/`,
        isHosted: true
    },
    orbit: {
        bgImage: { backgroundImage: `url(${group1Logo})` }, projectClass: `project2`,
        imageAlt: `Logo for the note taker application.`,
        title: `Orbital Dictionary`,
        lang: `HTML, CSS, RESTful API`,
        repoLink: `https://github.com/JackhParker/Orbital_Dictionary_Website`,
        liveLink: `https://jackhparker.github.io/Orbital_Dictionary_Website/`,
        isHosted: true

    },
    cms: {
        bgImage: { backgroundImage: `url(${cmsLogo})` }, projectClass: 'project3',
        imageAlt: `logo for the cms application`,
        title: `CMS Employee management Tracker`,
        lang: `Node, Sequelize, JS`,
        repoLink: `https://github.com/aclelandx/Employee-Tracker-SQL-Adam-Cleland`,
        liveLink: ``,
        isHosted: false
    },
    noteTaker: {
        bgImage: { backgroundImage: `url(${noteTakerLogo})` }, projectClass: `project4`,
        imageAlt: `Logo for the note taker application.`,
        title: `Note Taker`,
        lang: `Express, JS`,
        repoLink: `https://github.com/aclelandx/Note-Taker-Application-Express-JS-Adam-Cleland`,
        liveLink: `https://github.com/aclelandx/Note-Taker-Application-Express-JS-Adam-Cleland`,
        isHosted: true
    },
    dayPlanner: {
        bgImage: { backgroundImage: `url(${dayPlannerLogo})` }, projectClass: `project5`,
        imageAlt: `Logo for the day planner application.`,
        title: `Day Planner`,
        lang: `Moment, JS, HTML, CSS`,
        repoLink: `https://github.com/aclelandx/Day-Planner-Moment-JS-Adam-Cleland`,
        liveLink: `https://aclelandx.github.io/Day-Planner-Moment-JS-Adam-Cleland/`,
        isHosted: true
    },
    codingQuiz: {
        bgImage: { backgroundImage: `url(${codingQuizLogo})` }, projectClass: `project6`,
        imageAlt: `Logo for the Coding quiz application`,
        title: `Timed Coding Quiz`,
        lang: `JS, HTML5, CSS3`,
        repoLink: `https://github.com/aclelandx/Timed-Coding-Quiz-Adam-Cleland`,
        liveLink: `https://aclelandx.github.io/Timed-Coding-Quiz-Adam-Cleland/`,
        isHosted: true
    }
}

export default projectContent