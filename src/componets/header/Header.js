import './Header.css';
import Logoo from '../core/logo/Logo';
import SearchBox from '../core/searchbox/SearchBox';
import MenuBar from '../core/menubar/MenuBar';
import Profile from '../core/profile/Profile';
import Button from '../core/button/Button';

function Header(){
    return(
        <div className="Header-main">
            <div class="row">
                <div class="col-md-3">
                     <Logoo/>
                     <SearchBox/>
                </div>
                <div class="col-md-6">
                    <MenuBar/>
                </div>
                <div class="col-md-3">
                    <Profile name="nadun "/>
                    <Button icon="fa fa-plus"/>
                    <Button icon="fa fa-comment" count="5"/>
                    <Button icon="fa fa-bell" count="12"/>
                    <Button icon="fa fa-caret-down"/>
                </div>
            </div>
        </div>
    );
}

export default Header;