import React from "react";
import s from "../ProfileInfo.module.css"

const Contact = (props) => {
    return <div className={s.contact}>
        <b>{props.contactTitle}</b>: {props.contactValue}
    </div>
}

export default Contact;