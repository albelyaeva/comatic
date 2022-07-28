import {login, logout} from '@/services/user.service';
import router from '@/helpers/router';

const user = JSON.parse(localStorage.getItem('token'));

const state = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

const actions = {
    login({ dispatch, commit }, { username, password }) {
        commit('loginRequest', { username });

        login(username, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    localStorage.setItem( 'token', JSON.stringify(user.data.data.token) );
                    console.log(user.data.data.token)
                    router.push({name: 'Home'}).then(r => console.log(r));
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }) {
        logout();
        commit('logout');
        router.push({name: 'Login'}).then(r => console.log(r));
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};