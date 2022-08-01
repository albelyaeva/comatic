import {authHeader} from '@/helpers';
import TokenService from '@/services/token.service';
import axiosInstance from '@/services/setupInterceptors';
import router from '@/helpers/router';

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
}

export const loginUser = (username, password) => {
    return axiosInstance.post(`${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_PORT}/V1/Authentication/users/login`, {
        userName: username, password: password
    }, {
        headers: headers
    }).then(response => {
        TokenService.setUser(response.data.data);
        router.push({path: '/'}).then(r => console.log(r));
        return response.data;
    })
}

export const logout = () => {
    TokenService.removeUser();
    router.push({name: 'Login'}).then(r => console.log(r));
}

export const getAllUsers = (pageNumber, pageSize, offset) => {
    if (pageNumber && pageSize && offset) {
        return axiosInstance
            .get(`${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_PORT}/V1/Authentication/users?PageNumber=${pageNumber}&PageSize=${pageSize}&Offset=${offset}`, {
            headers: authHeader()
        })
    }
    else {
        return axiosInstance
            .get(`${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_PORT}/V1/Authentication/users`, {
                headers: authHeader()
            })
    }
}

export const register = (user) => {
    return axiosInstance.post(`${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_PORT}/V1/Authentication/users/register/password`, user, {
        headers: headers
    }).then(response => {
        TokenService.setUser(response.data.data);
        router.push({path: '/'}).then(r => console.log(r));
        return response.data;
    })
}

export const update = (user) => {
    return axiosInstance.put(`${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_PORT}/V1/Authentication/users`, JSON.stringify(user), {
        headers: {...authHeader(), 'Content-Type': 'application/json'}
    })
}

export const _delete = (userName) => {

    return axiosInstance.delete(`${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_PORT}/V1/Authentication/users?userName=${userName}`, {
        headers: {...authHeader()}
    })

}