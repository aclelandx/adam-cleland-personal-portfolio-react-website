import { Link } from 'react-router-dom';


function NavButton (props){
    
    return (
        // <button className={props.cName} onClick={props.action}>
        //     {props.content}
            
        // </button>   
        <Link className={props.content + `btn`} to={props.destination} >
            {props.content}
        </Link> 
    )
}

export default NavButton