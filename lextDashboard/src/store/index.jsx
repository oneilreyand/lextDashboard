import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from './reducer/index.jsx';

const middleware = [thunk];

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    devTools: true,
});


export default store;
