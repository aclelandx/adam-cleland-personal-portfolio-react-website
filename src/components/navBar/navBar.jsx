import NavButton from "./navBarButton"

function NavBar ({gotoHome, gotoProjects, gotoContact, gotoResume}){
    return(
        <nav>
            {/* <NavButton content='Home' action={gotoHome} />
            <NavButton content='Projects' action={gotoProjects} />
            <NavButton content='Contact Me' action={gotoContact} />
            <NavButton content='Resume' action={gotoResume} /> */}

            <NavButton content='Home'destination='/'>

            </NavButton>
        </nav>
    )
}

export default NavBar