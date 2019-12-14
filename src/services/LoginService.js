
import $ from '../../node_modules/jquery/dist/jquery';

const BASE_URL = "https://u-of-m-album.herokuapp.com";

class LoginService {

    constructor() { }

    getAuthTokenClaims(authorizationToken) {
        if (authorizationToken) {
            let token = null;
            try {
                token = JSON.parse(atob(authorizationToken.replace("Bearer", "").trim().split(".")[1]));
            } catch (e) {
                return null;
            }
            return token;
        }
    }

    getAuthToken() {
        let authorizationToken = localStorage['kanboardAuthToken'] || null;
        if (authorizationToken) {
            let expired = this.isAuthTokenExpired(authorizationToken);
            if (expired) {
                return null;
            } else {
                return authorizationToken;
            }
        } else {
            return null;
        }
    }

    loginRequest(username, password) {
        return $.ajax({
            url: BASE_URL + "/login",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Expose-Headers': 'Authorization'
            },
            method: 'POST',
            data: JSON.stringify({
                "username": username,
                "password": password
            })
        });
    }

    registerRequest(username, password) {
        return $.ajax({
            url: BASE_URL + "/register",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Expose-Headers': 'Authorization'
            },
            method: 'POST',
            data: JSON.stringify({
                "username": username,
                "password": password
            })
        });
    }

    stashAuthToken(authToken) {
        localStorage['kanboardAuthToken'] = authToken;
    }

    isAuthTokenExpired(authTokenClaims) {
        try {
            let exp = this.getAuthTokenClaims(authTokenClaims).exp;
            if (exp && !isNaN(exp)) {
                return new Date().getTime() < exp;
            } else {
                return true;
            }
        } catch (e) {
            return true;
        }
    }

}

export default new LoginService();