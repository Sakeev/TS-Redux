import { combineReducers } from 'redux';
import { crudReducer } from './crudReducer';
// import { userReducer } from './userReducer';
// import { postReducer } from './postsReducer';

export const rootReducer = combineReducers({
    crudReducer,
    
});

export type RootState = ReturnType<typeof rootReducer>;
