import { createStore } from 'redux'
import reducer from './reducer'
// 创建仓库
const store = new createStore(reducer)

export default store