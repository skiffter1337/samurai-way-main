import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "7f308525-caa2-4707-aff1-0ff1cd5594a0"}
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
        return instance.put('profile/status', {status: status})
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


