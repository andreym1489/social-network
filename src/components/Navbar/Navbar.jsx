import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/social-network/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/social-network/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/social-network/users" activeClassName={s.active}>Users</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
