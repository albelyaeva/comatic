import TokenService from './token.service';
import axios from 'axios';
import {store} from '@/store';

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
    const token = TokenService.getLocalAccessToken();

    config.headers.common['Authorization'] = `Bearer ${token}`;
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response.status === 401) {

            const payload = {
                token: TokenService.getLocalAccessToken(),
                refreshToken: TokenService.getLocalRefreshToken(),
            };

            const response = await axios.post(
                `${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_PORT}/V1/Authentication/users/login/refresh`,
                payload
            );
            await store.dispatch('account/refreshToken', response.data.data);
            TokenService.updateLocalAccessToken(response.data.data.token);
            TokenService.updateLocalRefreshToken(response.data.data.refreshToken)
            error.config.headers[
                'Authorization'
                ] = `Bearer ${response.data.data.token}`;
            return axios(error.config);
        } else {
            return Promise.reject(error);
        }
    }
);

export default axiosInstance;