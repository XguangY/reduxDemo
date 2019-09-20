import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionType'
const defaultState = {
    inputValue: '输入，输入2222',
    list: [
        'aaa',
        'bbbbb',
        '阿凡达速度发发顺丰的所得税法'
    ]
}

export default (state = defaultState, action) => {
    // console.log(state, action)
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    //state值只能传递，不能使用
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index, 1)  //push新的内容到列表中去
        return newState
    }
    return state
}