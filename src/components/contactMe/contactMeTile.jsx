const linkCheck = (isLink, text, linkRef) => {
    if (isLink) {
        return (<a href={linkRef} target='_blank' rel='noreferrer'>{text}</a>)
    } else { 
        return ( <p>{text}</p> )};
}

function ContactTile({imgSrc, imgAlt, title, text, isLink, linkRef}) {
    return ( 
        <article className="contactTile">
            <img src={imgSrc} alt={imgAlt} />
            <h4>{title}</h4>
            {linkCheck(isLink, text, linkRef)}
        </article> 
    );
}

export default ContactTile;