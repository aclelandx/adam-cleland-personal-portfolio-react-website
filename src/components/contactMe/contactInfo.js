import githubIcon from '../../images/github-icon.svg';
import linkedinIcon from '../../images/linked-in-icon.svg';
import phoneIcon from '../../images/cell-phone-icon.svg';
import emailIcon from '../../images/email-icon.svg';

const contactInfo = {
    github: {
        imgSrc: githubIcon,
        imgAlt: `Github icon surrounded by a circle`,
        title: `GitHub Profile`,
        text: `aClelandx`,
        isLink: true,
        linkRef: `https://github.com/aclelandx`
    },

    linkedIn: {
        imgSrc: linkedinIcon,
        imgAlt: `Linked in icon surrounded by a circle`,
        title: `Linked In`,
        text: `Profile`,
        isLink: true,
        linkRef: `https://www.linkedin.com/in/adam-cleland-a1002210a/`
    },

    phone: {
        imgSrc: phoneIcon,
        imgAlt: `Icon of a cellPhone`,
        title: `Phone Number`,
        text: `(614) 441-7339`,
        isLink: false,
        linkRef: ``
    },

    email: {
        imgSrc: emailIcon,
        imgAlt: `Email icon with Adam Clelands logo on it.`,
        title: `Email Address`,
        text: `aclelandx@gmail.com`,
        isLink: false,
        linkRef: ``
    }
}

export default contactInfo;