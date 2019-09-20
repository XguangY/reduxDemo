import React from 'react';
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd'

const ToDoListUI = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ marginRight: '10px', width: '250px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button
                    type="primary"
                    onClick={props.clickBtn}>
                    添加
                </Button>
            </div>
            <div style={{ width: '300px', margin: '10px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => (props.deleteItem(index))}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default ToDoListUI;