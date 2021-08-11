import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Contact from "./ProfileContacts";

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner &&
            <div>
                <button onClick={props.goToEditMode}>Edit</button>
            </div>}
            <div>
                <b>Full Name</b>: {props.profile.fullName}
            </div>

            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key}
                                contactTitle={key}
                                contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>

    )
}

export default ProfileData;