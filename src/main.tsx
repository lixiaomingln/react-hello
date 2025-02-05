// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 1. 启用 scss 
// npm install sass --save-dev
import './index.scss'

import App from './App.tsx'
// import { BrowserRouter } from 'react-router-dom'

/**
 * main.tsx 是整个 react 应用的入口文件
 * 1. 创建 react 根节点
 * 2. 渲染 App.tsx 组件并挂载到 html 中的 #root 节点
 * 3. 可以在这里引入全局样式文件, React.StrictMode, 以及其他全局配置
 */


createRoot(document.getElementById('root')!).render(
  // React StrictMode 是 React 提供的一个开发工具，
  // 旨在帮助开发者发现潜在的问题并促使代码更加健壮。它不会影响生产环境的行为，只在开发模式下启用
  // <StrictMode>
  //   <App />
  // </StrictMode>,


  <App />
   
)
