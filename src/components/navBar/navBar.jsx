import NavButton from "./navBarButton"
import AdamLogo from "../homeScreen/myLogo"

function NavBar () {
    return(
        <header>
            <nav>
                <AdamLogo />
                <NavButton content='Home'destination='%PUBLIC_URL%/'></NavButton>
                <NavButton content='Projects'destination='%PUBLIC_URL%/projects'></NavButton>
                <NavButton content='Contact'destination='%PUBLIC_URL%/contact'></NavButton>
                <NavButton content='Resume'destination='%PUBLIC_URL%/resume'></NavButton>
            </nav>
        </header>
    )
}

export default NavBar