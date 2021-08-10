
import userPhoto from '../../assets/images/ava.jpg';
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/API";

const User = (props) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${props.user.id}`}>
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
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                    <div>u.location.country</div>
                    <div>u.location.city</div>
                </span>
            </span>
        </div>
    );
}

export default User;