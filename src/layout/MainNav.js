import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
const { Sider } = Layout;

export default function MainNav() {
  return (
    <Sider className="site-layout-background" width={200}>
      <Menu mode="inline" defaultSelectedKeys={['Welcome']} style={{ height: '100%' }}>
        <Menu.Item key="Welcome" icon={<LaptopOutlined />}>
          <Link to="/welcome">Welcome</Link>
        </Menu.Item>
        <Menu.Item key="router" icon={<UserOutlined />}>
          <Link to="/routerTry">RouterTrdy</Link>
        </Menu.Item>
        <Menu.Item key="hook" icon={<LaptopOutlined />}>
          <Link to="/hookTry">HookTry</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
