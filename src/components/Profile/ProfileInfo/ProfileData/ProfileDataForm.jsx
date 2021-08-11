import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {CreateField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from "../ProfileInfo.module.css"
import style from "../../../common/FormsControls/FormsControls.module.css"


const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button onClick={()=>{}}>Save</button>
            </div>
            {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <b>Full Name</b>: {CreateField("Full name", "fullName", "", Input, [])}
            </div>
            <div>
                <b>About me</b>: {CreateField("About me", "aboutMe", "", Textarea, [])}
            </div>
            <div>
                <b>Looking for a job</b>: {CreateField("", "lookingForAJob", "checkbox", Input, [])}
            </div>
            <div>
                <b>My professional skills</b>: {CreateField("Enter your skills", "lookingForAJobDescription", "", Textarea, [])}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}</b>: {CreateField(key, `contacts.${key}`, "", Input, [])}
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm)

export default ProfileDataReduxForm;