
import { configureStore } from '@reduxjs/toolkit';
import common from './commonSlice'
import auth from './commonSlice'

const store = configureStore({
    reducer:{
        common: common,
        auth: auth
    }
})

export default store;