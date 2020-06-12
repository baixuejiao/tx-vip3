import React, { Component } from 'react';
import axios from 'axios'
class Demo extends Component {
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        axios.get('http://www.qingmengtech.com/getlist').then((res)=>{
            console.log(res.data.list);
            this.setState({
                list:res.data.list
            })
        })
    }y

    render() {
        return (
            <div>
                <h2>这是测试mock 的页面</h2>
                <ul>
                    {
                        this.state.list.map((obj,index)=>{
                        return <li key={index}>{obj.id} -  {obj.date} -{obj.name} -{obj.color}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Demo;