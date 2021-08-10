import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Redirect} from "react-router-dom";
import AddMessageFormRedux from "./AddMessageForm";

const Dialogs = (props) => {
    let dialogsPage = props.dialogsPage;

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message}/>)

    if (!props.isAuth) return <Redirect to={'/login'}/>

    const onSubmit = (data) => {
        props.addMessage(data.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export default Dialogs;