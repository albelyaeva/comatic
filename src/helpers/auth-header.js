export function authHeader() {
    let token = JSON.parse(localStorage.getItem('token'));

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