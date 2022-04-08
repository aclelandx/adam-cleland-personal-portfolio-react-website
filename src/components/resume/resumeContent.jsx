import resumeIcon from '../../images/resume-icon.svg'
import resumePdf from '../../resume/adam-cleland-resume.pdf'

function ResumeContent() {
    return ( 
        <article className='resumeContent'>
            <img src={resumeIcon} alt="Icon for a resume surrounded by a circle" />
            <hr />
            <span>
                <h4>Adam Cleland's Resume</h4>
                <p>Thank you for the interest! The link below will take you to my resume.</p>
                <a href={resumePdf} onclick="openPdf(event, 'assets/pdf/a_pdf_doc.pdf', 'Adam-Cleland-Resume.html');" target="_blank" rel='noreferrer'>My Resume</a>
            </span>
        </article>
    );
}

export default ResumeContent;