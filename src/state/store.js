
import { configureStore } from '@reduxjs/toolkit';
import currentPath from './slice'

const store = configureStore({
    reducer:{
        path: currentPath
    }
})

export default store;