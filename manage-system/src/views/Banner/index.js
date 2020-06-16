import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios'
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render:(status)=>(
          status?<span>已上线</span>:<span>已下线</span>
      )
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render:()=>(
            <span>
                <a href="#">修改</a>|
                <a href="#">删除</a>|
                <a href="#">上线</a>|
                <a href="#">下线</a>
            </span>
        )
      },
  ];
class index extends Component {
    constructor(){
        super();
        this.state = {
            dataSource:[]
        }
    }
    componentDidMount(){
        axios.get('http://www.qmtech/getdata').then(res=>{
            // console.log(res.data)
            if(res.data.errno*1 === 0){
                this.setState({
                    dataSource:res.data.data.list
                })
            }else{
                console.log(res.data.errmsg);
            }
            
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <Table dataSource={this.state.dataSource} columns={columns} />;
            </div>
        );
    }
}

export default index;