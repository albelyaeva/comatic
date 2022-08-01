import TokenService from '@/services/token.service';

export function authHeader() {
    let token = TokenService.getLocalAccessToken()

    if (token) {
        return {
            "Authorization": 'Bearer ' + token,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        };
    } else {
        return {};
    }
}