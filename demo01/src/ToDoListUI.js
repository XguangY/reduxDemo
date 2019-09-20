import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd'
class ToDoListUI extends Component {
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.props.inputValue}
                        style={{ marginRight: '10px', width: '250px' }}
                        onChange={this.props.changeInputValue}
                        value={this.props.inputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.props.clickBtn}>
                        添加
                    </Button>
                </div>
                <div style={{ width: '300px', margin: '10px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={() => (this.props.deleteItem(index))}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default ToDoListUI;