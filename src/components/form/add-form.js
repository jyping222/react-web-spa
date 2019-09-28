import React from 'react'
import { Form, Icon, Input, Button, Checkbox} from 'antd'
import PropTypes from 'prop-types'
class addForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    static propTypes={
        categorys:PropTypes.array.isRequired,
        parentId:PropTypes.string.isRequired
        
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { categorys,parentId}=this.props
        return (
            <div>
                
                <Form>
                    <Form.Item label="所属分类">
                    {getFieldDecorator('parentId', {

                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                       <select>
                           <option></option>
                       </select>
                    )}
                    </Form.Item>
                    <Form.Item label="分类名称">
                    {getFieldDecorator('categoryName', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
        
      </Form>
            </div>
        );
    }
}

export default Form.create()(addForm);