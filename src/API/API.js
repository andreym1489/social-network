import * as axios from "axios";
import {savePhoto} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "492de92e-04f3-441e-8b79-42a0931935eb"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getUserProfile(userId) {
        return profileAPI.getUserProfile(userId)
    }

}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        let formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profileData) {
        return instance.put(`profile`, profileData)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me');
    },
    login(userData) {
        return instance.post('auth/login', {
            email: userData.email,
            password: userData.password,
            rememberMe: userData.rememberMe,
            captcha: userData.captcha
        })
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url');
    }
}