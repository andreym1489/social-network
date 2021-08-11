import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import React, {useState} from "react";
import ava from "../../../assets/images/ava.jpg"
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataReduxForm from "./ProfileData/ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then( () => {
            setEditMode(false);
        })
    }

    return (
        <div>
            <div className={s.head}>
                <img src="https://coolwallpapers.me/picsup/2513870-mountains-images-desktops.jpg" />
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : ava}/>
                { props.isOwner && <input type="file" onChange={onMainPhotoSelected}/> }

                {editMode
                    ? <ProfileDataReduxForm profile={props.profile}
                                            onSubmit={onSubmit}
                                            initialValues={props.profile}/>
                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   goToEditMode={ () => {setEditMode(true)}}/>}
            </div>
        </div>
    );
}

export default ProfileInfo;