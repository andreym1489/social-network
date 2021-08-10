import s from './Message.module.css'

const Message = (props) => {
    return (
        <div>
            <img className={s.ava} src="https://object.pscloud.io/cms/cms/Photo/img_0_2080_562_6.jpeg"/>
            <div className={s.message}>{props.message}</div>
        </div>

    );
}

export default Message;