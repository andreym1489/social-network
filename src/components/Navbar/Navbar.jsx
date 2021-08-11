import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="../profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a href="/profile">News</a>
            </div>
            <div className={s.item}>
                <a href="/profile">Music</a>
            </div>
            <div className={s.item}>
                <a href="/profile">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
