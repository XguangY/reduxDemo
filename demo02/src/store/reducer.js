const defaultStore = {
    inputValue: 'aa54a',
    list:[
        'erwtertwertw'
    ]
}

// reducer 需要返回一个纯函数

export default (state = defaultStore, action) => {
    if (action.type === 'change_input') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'add_list') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}