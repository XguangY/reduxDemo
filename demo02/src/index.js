import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList'
import store from './store'
import { Provider } from 'react-redux' // 引入provider 提供器

const APP = (
    <Provider store={store}>
        <ToDoList />
    </Provider>
)

ReactDOM.render(APP, document.getElementById('root'));
