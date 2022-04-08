import ContactTile from "./contactMeTile"
import contactInfo from "./contactInfo"

function ContactMePage (){
    return (
        <section className="contactMePage">
            <ContactTile {...contactInfo.github} />
            <ContactTile {...contactInfo.email} />
            <ContactTile {...contactInfo.linkedIn} />
            <ContactTile {...contactInfo.phone} />
        </section>
    )
}

export default ContactMePage