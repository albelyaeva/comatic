import {loginUser, logout, register} from '@/services/user.service';
import router from '@/helpers/router';

const user = JSON.parse(localStorage.getItem('user'));

const state = user ? {status: {loggedIn: true}, user} : {status: {}, user: null};


const actions = {
    login({commit}, {username, password}) {
        commit('loginRequest', {username});

        loginUser(username, password)
            .then(user => {
                commit('loginSuccess', user);
            }, error => {
                commit('loginFailure', error);
            });
    }, register({commit}, {user}) {
        register(user)
            .then(user => {
                commit('registerSuccess', user);
                router.push({name: 'Home'}).then(r => console.log(r));
            },)
            .catch(error => {
                commit('registerFailure', error);
            });
    }, logout({commit}) {
        logout();
        commit('logout');
    }, refreshToken({commit}, token) {
        console.log(token);
        commit('refreshToken', token);
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = {loggingIn: true};
        state.user = user;
    }, loginSuccess(state, user) {
        state.status = {loggedIn: true};
        state.user = user;
    }, loginFailure(state) {
        state.status = {};
        state.user = null;
    }, registerSuccess(state, user) {
        state.status = {loggedIn: true};
        state.user = user;
    }, registerFailure(state) {
        state.status = {};
        state.user = null;
    }, logout(state) {
        state.status = {};
        state.user = null;
    }, refreshToken(state, token) {
        state.status.loggedIn = true;
        state.user = {...state.user, token: token};
    }
};

export const account = {
    namespaced: true, state, actions, mutations
};