import React from 'react';
import { Card,Table } from 'antd'
import {data0,subData} from '../../utils/data'
class category1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const dataSource = data0
          
          const columns = [
            {
              title: '分类的名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '操作',
              dataIndex: 'parentId',
              key: 'age',
            },
    
          ];
          


        return (
            <div>
               <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
               <Table dataSource={dataSource} columns={columns} />;

                </Card> 
            </div>
        );
    }
}

export default category1;