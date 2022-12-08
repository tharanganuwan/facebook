import Menu from "./Menu";
import "./MenuBar.css"

function MenuBar(){
    return (
        <div className="MenuBar-main">
            <Menu name="Home" icon="fas fa-home"/>
            <Menu name="Watch" icon="fa-brands fa-youtube" count="4"/>
            <Menu name="Groups" icon="fa-solid fa-people-group"/>
            <Menu name="Games" icon="fa-solid fa-dice"/>
        </div>
    );
}
export default MenuBar;