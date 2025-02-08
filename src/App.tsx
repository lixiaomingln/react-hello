import './App.css'
import { useNavigate } from "react-router-dom";
import AppRoutes from './routes';
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from 'react';
import { useGlobalState } from './state/GlobalStateContext';

/**
 * App.tsx 是 react 应用的主组件，包含
 * 1. 应用的整体结构
 * 2. 路由配置
 * 3. 应用的主要 UI 逻辑
 */

const { Header, Content, Footer } = Layout;

const menuItems = [
  { label: "Admin Page", key: "/admin" },
  { label: "Teacher Page", key: "/teacher" },
  { label: "Student Page", key: "/student" }
];

const userMenu = (
  <Menu
    items={[{ key: "logout", label: "Logout" }]}
  />
);

const App: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('');
  const { dispatch } = useGlobalState();

  useEffect(() => {
    // 模拟 API 请求
    // 存放数据到 state 
    setTimeout(() => {
      dispatch({
        type: 'SET_CATEGORY_OPTIONS',
        payload: [
          { value: 'news', label: 'News' },
          { value: 'book', label: 'Books' },
        ],
      });
    }, 1000);
  }, [dispatch]);

  const menuClick = (e: any) => {
    setSelectedMenuItem(e.key);
    navigate(e.key);
  };

  return (
    <Layout className='shopping-web-container'>
      <Header className='layout-header'>
        <div className='logo'>$hopping</div>
        <Menu
          onClick={menuClick}
          mode="horizontal"
          className='menu'
          items={menuItems}
          selectedKeys={[selectedMenuItem]} />
        <div className="user-info">
          <span className="login-text">Login as Admin</span>
          <Dropdown overlay={userMenu} placement="bottomRight" trigger={["hover"]}>
            <div className="avatar">
              <Avatar icon={<UserOutlined />} />
              <span className='user-name'>User Name</span>
            </div>
          </Dropdown>
        </div>
      </Header>

      <Content className='layout-body'>
        <AppRoutes />
      </Content>

      <Footer className='layout-footer'>©2025 Created by CPA</Footer>
    </Layout>
  );
};

export default App
