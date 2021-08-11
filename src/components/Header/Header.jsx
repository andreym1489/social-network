import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const Header = (props) => {
    return (
        <header className={s.header}>
            <span>Social-network</span>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

const mapStateToProps = () => {

}

export default connect(mapStateToProps, {logout})(Header);