import React /*, { useState }*/ from 'react'
import './App.css'
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from './routes';

/**
 * App.tsx 是 react 应用的主组件，包含
 * 1. 应用的整体结构
 * 2. 路由配置
 * 3. 应用的主要 UI 逻辑
 */

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/teacher">Teacher</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
        </ul>
      </nav>
      <AppRoutes />
    </Router>
  )
}

export default App
