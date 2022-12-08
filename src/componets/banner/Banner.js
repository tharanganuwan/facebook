import Cover from '../core/cover/Cover';
import PageHeader from '../core/pageheader/PageHeader';
import './Banner.css';
import image from "./image.jpg";

function Banner(){
    return(
        <div className='Banner-main'>
            <div className='container Banner-container'>
                <Cover image="./banner.jpg"/>
                <PageHeader image={image} name = "Tharanga Nuwan" username="@rocketnuwan" 
                category="school" buttonText="Contact Us" link="pluginsl.com"/>
            </div>
            
        </div>
    );
}

export default Banner;