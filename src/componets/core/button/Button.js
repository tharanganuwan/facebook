import "./Button.css";

function Button(props){
    return(
        <button className="Button-Main">
            <i className={props.icon}></i>
            {
                props.count>0 && <span className="badge badge-pill badge-danger Button-badge">{ props.count }</span>
            }
        </button>
    );
}

export default Button;
