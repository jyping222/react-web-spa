import React from 'react';
import {Switch,Route} from 'react-router-dom'
import { Layout } from 'antd';
import './admin.less'
import LeftNav from '../../components/left-nav/left-nav'

import Category from '../category/category'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Home from '../home/home'
import Role from '../role/role'
import User from '../user/user'
import Product from '../product/product'

import HeaderInfo from '../../components/header/header'
const { Header, Footer, Sider, Content } = Layout;
class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Layout>
                    <Sider>
                        <LeftNav/>
                    </Sider>
                    <Layout>
                        <Header>
                            <HeaderInfo/>
                        </Header>
                        <Content style={{backgroundColor:'white',margin: '20px 20px 0'}}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/product/category' component={Category}/>
                            <Route path='/product/product' component={Product}/>
                            <Route path='/role' component={Role}/>
                            <Route path='/user' component={User}/>
                            <Route path='/charts/bar' component={Bar}/>
                            <Route path='/charts/line' component={Line}/>
                            <Route path='/charts/pie' component={Pie}/>
                        </Switch>
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
  
            </div>
        );
    }
}

export default Admin;