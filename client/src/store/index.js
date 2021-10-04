import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from "../reducer/reducer";

const composeEnhancer = (typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||	compose;

//comando para poder usar el reduxdevtools 
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creo el store
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

// y ahora lo exporto

export default store;
