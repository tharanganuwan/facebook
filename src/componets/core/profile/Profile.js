import "./Profile.css"
import image from "./profile.jpg"

function Profile(props){
    return (
        <div className="Profile-Main">
            <img src={image} className="Profile-photo"/>
            <span>{props.name}</span>
        </div>
    );
}

export default Profile;