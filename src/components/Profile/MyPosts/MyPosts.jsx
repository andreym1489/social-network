import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import AddPostFormRedux from "./AddPostForm";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post key={p} message={p.message} likeCounts={p.likeCounts} />);

    const onSubmit = (data) => {
        props.addPost(data.newPostBody);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;