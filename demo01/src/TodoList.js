import React, { Component } from 'react'
import store from './store'
import { changeItemAction, addItemAction, deleteItemAction } from './store/actionCreators'
import ToDoListUI from './ToDoListUI'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
           <ToDoListUI
           inputValue={this.state.inputValue}
           changeInputValue={this.changeInputValue}
           clickBtn={this.clickBtn}
           deleteItem={this.deleteItem}
           list={this.state.list}
           />
        )
    }
    changeInputValue(e) {
        const action = changeItemAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(e) {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList