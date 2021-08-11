import userPhoto from '../../assets/images/ava.jpg';
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/API";
import s from "./User.module.css"

const User = (props) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/social-network/profile/${props.user.id}`}>
                        <img src={props.user.photos.small !== null ? props.user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {
                        props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => props.unfollow(props.user.id)}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => usersAPI.follow(props.user.id)}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <div className={s.userItem}>
                    <div>
                        <b>Name</b>: {props.user.name}
                    </div>
                    <div>
                        <b>Status</b>: {props.user.status
                                        ? props.user.status
                                        : 'No status'}
                    </div>
                </div>
            </span>
        </div>
    );
}

export default User;