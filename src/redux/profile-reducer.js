import {profileAPI, usersAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';
const SET_SAVING_PROFILE = 'SET_SAVING_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: '55'},
        {id: 2, message: 'It\'s my first post', likeCounts: '3'},
        {id: 3, message: 'FSAFASF', likeCounts: '12'},
        {id: 4, message: 'New', likeCounts: '102'}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPost,
                likeCounts: 10
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SET_SAVING_PROFILE:
            return {
                ...state,

            }
        default:
            return state;
    }
}

export const addPost = (newPostBody) => ({type: ADD_POST, newPost: newPostBody})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
const setPhotoSuccess = (photos) => ({type: SET_PHOTO_SUCCESS, photos});
const setSavingProfile = (profileData) => ({type: SET_SAVING_PROFILE, profileData});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos));
    }
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const saveProfile = (profileData) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profileData)
    if (response.data.resultCode === 0) {
        dispatch(setSavingProfile(response.data.data.photos));
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;