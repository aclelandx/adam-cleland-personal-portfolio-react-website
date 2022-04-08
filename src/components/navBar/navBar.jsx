import NavButton from "./navBarButton"
import AdamLogo from "../homeScreen/myLogo"

function NavBar () {
    return(
        <header>
            <nav>
                <AdamLogo />
                <NavButton content='Home'destination='./'></NavButton>
                <NavButton content='Projects'destination='./projects'></NavButton>
                <NavButton content='Contact'destination='./contact'></NavButton>
                <NavButton content='Resume'destination='./resume'></NavButton>
            </nav>
        </header>
    )
}

export default NavBar