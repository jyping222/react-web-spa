import React from 'react';
import { Form, Icon, Input, Button,message } from 'antd';
import logo from '../../assets/images/logo.png'
import './login.less'

import {reqLogin} from '../../ajax/index'
import memoryUtils from'../../utils/memoryUtils'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    login=async (username, password)=>{
        const result=await reqLogin(username,password)
        return result
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const {username, password}=values
            const data=this.login(username,password)
            if(data.status===0){
                message.success('登陆成功')
                memoryUtils.SetStore(data.username)
            }else{
                message.error('登陆失败，用户名或密码错误')
            }
          }
        });
      };
      validator=(rule, value, callback)=>{
        const pwdReg=/^[0-9a-zA-Z_]+$/

        if (!value) {
            callback('必须输入密码！')
        }else if(value.length<4){
            callback('密码必须大于4')
        }else if(!pwdReg.test(value)){
            callback('密码必须是英文、数组或下划线组成')
        }else(
            callback()
        )

        // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
        callback()
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id='login'>
               <div className='header'>
                       <div className='header-logo'>
                           <img src={logo} alt=''/>
                       </div>
                       <h2>React项目：后台管理系统</h2>
                </div> 
                <div className="login-form">
                    <h2>用户登录</h2> 
                <Form onSubmit={this.handleSubmit} className="login-form1">
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true,message: 'Please input your username!' },{min:4,message:'用户名必须大于4'}],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ validator:this.validator}],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        
                        
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        
                        </Form.Item>
                    </Form>
               
                            
                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

 
export default WrappedNormalLoginForm