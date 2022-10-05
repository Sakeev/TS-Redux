import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { JSON_API } from '../types/crud';
import { rootReducer } from './reducers/rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));
