import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const data = [
    'hahahah',
    '呵呵呵呵',
    'bbb'
]

class TodoList extends Component {
    render() {
        return (
            <div style= {{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder="请输入"
                        style={{ width: '250px', marginRight: '10px' }}
                    />
                    <Button type="primary">ADD</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList