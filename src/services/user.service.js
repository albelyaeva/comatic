import {authHeader} from '@/helpers';
import axios from 'axios';

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
}

export const login = (username, password) => {
    return axios.post(`${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_PORT}/V1/Authentication/users/login`, {
            userName: username,
            password: password
        }, {
            headers: headers
        }
    )
}

export const logout = () => {
    localStorage.removeItem('token');
}

export const getAll = () => {
    console.log('Bearer ' + authHeader())
    return axios.get(`${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_PORT}/V1/Authentication/users`, {
        headers: authHeader()

    })
}

export const register = (user) => {
    return axios.post(`${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_PORT}/V1/Authentication/users/register/password`,
        JSON.stringify(user),
        {
            headers: headers
        })
}