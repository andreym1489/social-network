import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import React from "react";
import ava from "../../../assets/images/ava.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.head}>
                <img src="https://coolwallpapers.me/picsup/2513870-mountains-images-desktops.jpg" />
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : ava}/>
                <p>{props.profile.fullName}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;