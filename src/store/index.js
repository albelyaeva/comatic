import { createStore } from 'vuex'

import { account } from './modules/account';


export const store = createStore({
    modules: {
        account
    }
});