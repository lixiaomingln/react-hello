import { Route, Routes } from "react-router-dom"
import Admin from "./pages/Admin"
import Teacher from "./pages/Teacher"
import Student from "./pages/Student"

const AppRoutes = () => { 
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/teacher" element={<Teacher />}></Route>
      <Route path="/student" element={<Student /> }></Route>
    </Routes>
  )
}

export default AppRoutes;