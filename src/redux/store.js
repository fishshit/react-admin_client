/**
 * redux最核心的管理对象store
 * 向外默认暴露一个store
 */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer';

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))