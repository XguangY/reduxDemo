import React from 'react';
import { connect } from 'react-redux'

const ToDoList = (props) => {
    let { inputValue, inputChange, inputBtn, list } = props
    return (
        <div>
            <div>
                <div>
                    <input
                        value={inputValue}
                        onChange={inputChange} />
                    <button
                        onClick={inputBtn}>提交</button>
                </div>
                <div>
                    <ul>
                        {
                            list.map((item, index) => {
                                return (<li key={index}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        inputBtn() {
            let action = {
                type: 'add_list'
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(ToDoList);