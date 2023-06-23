import axios from "axios";
import {ProfileDataFormType} from "../components/Profile/ProfileInfo/ProfileData/ProfileDataForm/ProfileDataForm";



const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "2edad0c1-3f18-46af-99ae-be170d3a89d1"}
})

export const userAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow: (userId: number) => {
        return instance.post('follow/' + userId)
            .then(response => {
                return response.data
            })
    },
    unFollow: (userId: number) => {
        return instance.delete('follow/' + userId)
            .then(response => {
                return response.data
            })
    },
}

export const profileAPI = {
    getUser: (userId: number) => {
        return instance.get('profile/' + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus: (userId: number) => {
        return instance.get('profile/status/' + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus: (status: string) => {
        return instance.put('profile/status', {status: status})
    },
    changePhoto: (photoFile: File) => {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile: (formData: ProfileDataFormType) => {
        return instance.put('profile', formData)
    }

}
export const authAPI = {
    me: () => instance.get('auth/me')
        .then(response => response.data),
    login: (email: string, password: string, rememberMe: boolean = false, captcha: string) => instance.post('auth/login', {
        email,
        password,
        rememberMe,
        captcha
    }),
    logout: () => instance.delete('auth/login'),


}

export const securityAPI = {
    getCaptcha: () => instance.get('security/get-captcha-url')
}
