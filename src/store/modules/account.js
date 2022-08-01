import {loginUser, logout, register} from '@/services/user.service';
import router from '@/helpers/router';

const user = JSON.parse(localStorage.getItem('token'));

const state = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

const setUserToken = (token) => {
    localStorage.setItem( 'token', JSON.stringify(token) );
}

const actions = {
    login({ dispatch, commit }, { username, password }) {
        commit('loginRequest', { username });

        loginUser(username, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    setUserToken(user.data.data.token);
                    router.push({name: 'Home'}).then(r => console.log(r));
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    register({ dispatch, commit }, { user }) {
        register(user)
            .then(
                user => {
                    commit('registerSuccess', user);
                    setUserToken(user.data.data.token);
                    router.push({name: 'Home'}).then(r => console.log(r));
                },
            )
            .catch(error => {
                commit('registerFailure', error);
                dispatch('alert/error', error, { root: true });
            });
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
    registerSuccess(state, user) {
        state.status = {loggedIn: true};
        state.user = user;
    },
    registerFailure(state) {
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