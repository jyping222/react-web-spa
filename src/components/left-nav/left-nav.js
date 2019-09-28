import { Layout, Menu, Icon } from 'antd';
import React from 'react'
import Logo from '../../assets/images/logo.png'
import {Link,withRouter} from 'react-router-dom'
import menuList from '../../config/menuConfig';
 
const {  Sider } = Layout;
const { SubMenu } = Menu;


class LeftNav extends React.Component {
  state = {
    collapsed: false,
  };
  
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  getMenu=(menuList1)=>{
    return  menuList1.map((value)=>{
     
        const path=this.props.location.pathname
          if(!value.children){
           
            return(
                <Menu.Item key={value.key}>
                <Link to={value.key}>
                <Icon type={value.icon} />
                <span>{value.title}</span>
                </Link>
               
                </Menu.Item>
            )}else{
                console.log('1111')
                console.log(path)
                if(value.children.find(val=>path.indexOf(val.key)!==-1)){
                 
                    this.openKey=value.key
                    console.log(this.openKey)
                }
                return(
                    <SubMenu
                        key={value.key}
                        title={
                            <span>
                            <Icon type={value.icon} />
                            <span>{value.title}</span>
                            </span>
                        }
                        >
                        {this.getMenu(value.children)}
                       
                        
                        </SubMenu>
                )
            
          }
      })
  }
  componentWillMount() {
    // this.menuNodes = this.getMenuNodes(menuConfig)
    this.menuNodes =  this.getMenu(menuList)
    }
  render() {
    const selectKey = this.props.location.pathname
    console.log('this.openKey',this.openKey)
    return (
        <div className="left-nav">
                <div className='logo'>
                    <img src={Logo} alt=''/>
                    <h3>谷粒后台</h3>
                </div>
                 <Layout style={{ minHeight: '100vh' }}>
                    <Sider >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={[selectKey]} defaultOpenKeys={[this.openKey]} mode="inline">
                        
                        
                                        {
                                        
                                        this.menuNodes
                    }
                                            
                    </Menu>
                    </Sider>
                    
                </Layout>
        </div>
     
    );
  }
}

export default withRouter(LeftNav);