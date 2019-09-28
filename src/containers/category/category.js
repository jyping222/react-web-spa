import React from 'react';
import { Card,Table ,Icon,Modal} from 'antd'
import {data0,subData} from '../../utils/data'
import LinkButton from '../../utils/link-button'
import './category.less'
import AddForm from '../../components/form/add-form'
class category1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            parentId:0,
            title:'一级分类',
            isShow:0
        };
    }
    modifyCategory=(category)=>{
        this.setState({isShow:1})
        this.category=category
    }
    showSubCategory=(category)=>{
        const categoryId=category._id
        this.setState({isShow:2,parentId:categoryId})
        
        
    }
    getCategory=(parentId)=>{
        if(parentId===0){
            this.dataSource = data0 
                    
        }else{
            this.dataSource=subData
        }
        const columns = [
            {
              title: '分类的名称',
              dataIndex: this.state.parentId===0?'name':'categoryName',
              
            },
            {
              title: '操作',
              width:300,
              
              render: (category) =>{
                //   console.log('2222222222category',category)
                // {parentId: 0, _id: "5cde35ed87b0c20f45cd347", name: "5积分卡", __v: 0}
                 return (
                     <div>
                         <LinkButton onClick={()=>this.modifyCategory(category)}>修改分类</LinkButton>
                    <LinkButton onClick={()=>this.showSubCategory(category)}>查看分类</LinkButton>
                     </div>
                 ) 

              }
          
           
            },
    
          ];
          return <Table rowKey='_id' dataSource={this.dataSource} columns={columns} pagination={{pageSize:2,showQuickJumper: true, showSizeChanger: true}} />;
    }
    backCategory=()=>{
        this.setState({
            parentId:0
        })
    }
    handleOk1 = () => {
        console.log('123213123213Clicked cancel button');
        let val=this.refs.inputItem.value
        let categoryId=this.category._id
        this.setState({
          isShow:0
        });
        this.dataSource=this.dataSource.map((item)=>{
            if(item._id===categoryId){
                item.name=val
            }
            console.log('123213123213item',item);
            return item
        })
      };
      handleOk = () => {
        
        this.setState({
          isShow:0
        });
        
      };
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          isShow:0
        });
      };
    
    componentDidMount(){
        
    }
    handleChange1=(val)=>{
        
    }
    setForm=(from)=>{
        this.from=from
    }
    render() {
       const {parentId,isShow}=this.state
        //title是一级分类还是二级分类
        const title=parentId===0?'一级分类':(<div><LinkButton onClick={this.backCategory}>一级分类</LinkButton><Icon type='arrow-right'/><span>二级分类</span></div>)
        // {parentId: 0, _id: "5cde35ed87b0c20f45cd347", name: "5积分卡", __v: 0}
        const categoryName=this.category?this.category.name: null
        return (
            <div>
                
               <Card title={title} extra={<LinkButton onClick={()=>this.setState({isShow:3})}>添加</LinkButton>} >
               {this.getCategory(this.state.parentId)}
               <Modal 
                            title="修改分类"
                            visible={isShow===1}
                            onOk={this.handleOk1}
                            onCancel={this.handleCancel}
                        >
                            <p><input className='modal-input' defaultValue={categoryName} type='text' ref='inputItem'/></p>
                 </Modal>
                <Modal
                    title="查看分类"
                    visible={isShow===2}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>qqq</p>
                </Modal>
                <Modal
                    title={parentId===0?"添加分类":"添加子分类"}
                    visible={isShow===3}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <AddForm categorys={this.categorys} parentId={parentId} setForm={this.setForm}/>
                </Modal>
                {/* <Pagination showQuickJumper defaultPageSize={2} defaultCurrent={1} total={3} pageSize={2} /> */}
                </Card> 
                
            </div>
        );
    }
}

export default category1;