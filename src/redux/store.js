import {configureStore} from "@reduxjs/toolkit";
import {productsApi} from "./productsApi/productsApi";
import localStorageReducer from './slices/localStorageSlice';
import headerCityReducer from './slices/headerCitySlice.js';

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        localStorage: localStorageReducer,
        headerCity: headerCityReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)

})


export default store;
