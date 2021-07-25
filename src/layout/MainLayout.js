import React from 'react';
import { Layout } from 'antd';
import MainNav from './MainNav';

const { Content, Footer } = Layout;

export default function MainLayout(props) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainNav />
      <Layout>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>{props.children}</Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Try for React</Footer>
      </Layout>
    </Layout>
  );
}
