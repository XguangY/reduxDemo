import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionType'
import axios from 'axios'
export const changeItemAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getToDoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
        .then(res => {
            console.log(res)
        })
        const data =  [
                'aaa1111',
                'bbbbb2222',
                '阿凡达速度发发顺丰的所得税法'
            ]
        const action = getListAction(data)
        dispatch(action)
    }
}
