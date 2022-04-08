import NavButton from "./navBarButton"
import AdamLogo from "../homeScreen/myLogo"

function NavBar () {
    return(
        <header>
            <nav>
                <AdamLogo />
                <NavButton content='Home'destination='/adam-cleland-personal-portfolio-react-website/'></NavButton>
                <NavButton content='Projects'destination='/adam-cleland-personal-portfolio-react-website/projects'></NavButton>
                <NavButton content='Contact'destination='/adam-cleland-personal-portfolio-react-website/contact'></NavButton>
                <NavButton content='Resume'destination='/adam-cleland-personal-portfolio-react-website/resume'></NavButton>
            </nav>
        </header>
    )
}

export default NavBar