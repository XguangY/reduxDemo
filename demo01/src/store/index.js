import { createStore, applyMiddleware  } from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSageMiddleWare from 'redux-saga'  //引入saga
import mySagas from './sagas'
const sagasMiddleWare = createSageMiddleWare() //创建saga中间件

// const store = createStore(reducer, applyMiddleware(thunk))
const store = createStore(reducer, applyMiddleware(sagasMiddleWare))
sagasMiddleWare.run(mySagas) // 执行run方法，让saga运行起来。
export default store