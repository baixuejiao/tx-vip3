import React, { Component } from 'react';
import { Menu } from 'antd';
import menuList from './../../config/menuConfig';
import { createFromIconfontCN } from '@ant-design/icons';
import { Link } from 'react-router-dom'
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1723185_hpwsfvxytgm.js',
});

const { SubMenu } = Menu;
class Nav extends Component {
    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    {
                        menuList.map(item => (
                            item.children ? (
                                <SubMenu key={item.path} title={
                                    <span>
                                        <IconFont type={item.icon} />
                                        <span>{item.title}</span>
                                    </span>
                                }>
                                    {
                                        item.children.map(obj => (
                                            <Menu.Item key={obj.path}>
                                                <Link to={obj.path}>
                                                    {obj.title}
                                                </Link>
                                            </Menu.Item>
                                        ))
                                    }
                                </SubMenu>
                            ) : (
                                    <Menu.Item key={item.path} >
                                        <Link to={item.path}>
                                            <IconFont type={item.icon} />
                                            {item.title}
                                        </Link>
                                    </Menu.Item>
                                )
                        ))
                    }
                </Menu>
            </div>
        );
    }
}

export default Nav;