import { put, takeEvery } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionType'
import axios from 'axios'
import { getListAction } from './actionCreators'
// generator 函数用于执行异步
function* mySagas() {
    //  等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
   const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
   const action = getListAction(res.data)
   yield put(action)
}

export default mySagas