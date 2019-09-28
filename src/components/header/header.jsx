import React from 'react';
import LinkButton from '../../utils/link-button'
import {withRouter} from 'react-router-dom'
import {Modal } from 'antd'
import './header.less'
import MenuConfig from '../../config/menuConfig'
import MemoryUtils from '../../utils/memoryUtils'
import {reqWeather} from '../../ajax/index.js'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    getTitle=(path)=>{
        let title
        MenuConfig.forEach(val=>{
            if(path===val.key){
                title=val.title
            }else if(val.children){
                val.children.forEach(child=>{
                 if(path===child.key) {
                    title=child.title
                 }

                })
               
            }
        })
        console.log('title',title)
        return title
    }
    formateDate=(time)=>{
        if (!time) return ''
        const date=new Date(time)
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    }
    getTime=()=>{
        this.Interval=setInterval(()=>
         this.setState({
              sysTime:this.formateDate(Date.now())
          })
        ,1000)
        
    }
    componentWillMount(){
        this.getTime()
        this.getWeather()
    }
    componentWillUnmount(){
        clearInterval(this.Interval)
    }
    logout = () => {
        Modal.confirm({
        content: '确定退出吗?',
        onOk: () => {
        console.log('OK')
        // 移除保存的 user
       
        // 跳转到 login
        this.props.history.replace('/login')
        },
        onCancel() {
        console.log('Cancel')
        },
        })
        }
    showConfirm=()=> {
        Modal.confirm({
          title: '要退出么?',
          
          onOk:()=> {
            
            MemoryUtils.removeStore()
            this.props.history.replace('/login')
          },
          onCancel:()=> {
            console.log('Cancel');
          },
        });
      }
      getWeather=async ()=>{
        const {dayPictureUrl,weather}=await reqWeather('北京')
        console.log('dayPictureUrl,weathe',dayPictureUrl,weather)
        this.setState({
            dayPictureUrl,weather
        })

      }

    
    render() {
        const path=this.props.location.pathname
      
        return (
           <div className="header-info">
               <div className='header-top'>欢迎，admin<LinkButton onClick={this.showConfirm}>退出</LinkButton></div>
               <div className="header-title"><div className='title'>{this.getTitle(path)}</div><div className='time-weather'><span>{this.state.sysTime}</span><span><img src={this.state.dayPictureUrl} alt=''/>{this.state.weather}</span></div></div>
           </div> 
        );
    }
}

export default withRouter(Header);