import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from "redux-thunk";

const initialState = {
    name: 'praven',
    age: 28
}


const reducer = (initialState) => initialState


// const store = createStore(reducer, initialState)
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))




export default store



