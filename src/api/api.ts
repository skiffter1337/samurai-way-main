import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "79a9049a-6c51-4301-9f88-90ab51a9c484"}
})

export const userAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
            .then(response => {
                return response.data
            })
    },
    follow: (userId: number) => {
        return instance.post('follow/' + userId, {}, {
            withCredentials: true,
            headers: {"API-KEY": "79a9049a-6c51-4301-9f88-90ab51a9c484"}
        })
            .then(response => {
                return response.data
            })
    },
    unFollow: (userId: number) => {
        return instance.delete('follow/' + userId, {
            withCredentials: true,
            headers: {"API-KEY": "79a9049a-6c51-4301-9f88-90ab51a9c484"}
        })
            .then(response => {
                return response.data
            })
    },
}

export const profileAPI = {
    getUser: (userId: string) => {
        return instance.get('profile/' + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus: (userId: string) => {
        return instance.get('profile/status/' + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus: (status: string) => {
     return instance.put('profile/status/', {status: status})
    }
}
export const authAPI = {
    me: () => {
        return instance.get('auth/me', {withCredentials: true})
            .then(response => {
                return response.data
            })
    }
}


