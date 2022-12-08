import "./Cover.css"

function Cover(props){
    return(
        <div className="Cover-main" style={{backgroundImage:'url('+props.image+')'}}></div>
    );
}

export default Cover;