import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.container}>
            <ProfileInfo isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;