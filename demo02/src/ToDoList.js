import React, { Component } from 'react';
import { connect } from 'react-redux'
class ToDoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <input value={this.props.inputValue} />
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

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

export default connect(stateToProps, null)(ToDoList);