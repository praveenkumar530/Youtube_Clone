import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from "redux-thunk";
import authReducer from './reducers/auth.reducer';
import { homeVideosReducer } from "./reducers/videos.reducer";


const reducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer
})


const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunk)))




export default store



