import React, { Component } from 'react';
import store from './store'
class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <input value={this.state.inputValue} />
                        <button>提交</button>
                    </div>
                    <div>
                        <ul>
                            <li>啊啊啊啊</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;