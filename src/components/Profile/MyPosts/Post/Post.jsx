import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://object.pscloud.io/cms/cms/Photo/img_0_2080_562_6.jpeg" alt="" />
            <span>{props.message}</span>
            <div>
                <span>likes: {props.likeCounts}</span>
            </div>
        </div>
    );
}

export default Post;