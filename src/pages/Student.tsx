import { useEffect, useState } from "react";
import { getStudents } from "../http";
import { Student } from "../types";
import { Alert, Spin, Table } from "antd";

const StudentComponent = () => {
  // return <h1>Student Page</h1>;

  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * useEffect 是 react 的一个 Hook, 主要用于处理副作用，包库
   * 1. 数据获取
   * 2. 订阅事件
   * 3. 手动 DOM 操作
   * 4. 定时器
   * 5. 清理操作
   * 
   * - 1. 只在组件挂载时执行
    useEffect(() => {
      console.log("组件挂载完成！");
    }, []);
   * - 仅执行一次，适用于 API 请求，初始化操作
   * 
   * - 2. 依赖于状态变化
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log(`当前 count: ${count}`);
    }, [count]); // 依赖于 count，count 变化时触发
   */
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // 1. 直接 http 操作
        // const response = await axios.get<Student[]>("http://localhost:3000/students");
        // setStudents(response.data);
        // 2. 封装之后的 http 操作
        const students = await getStudents();
        setStudents(students);
      } catch (error) {
        setError("Failed to load student" + error)
      } finally {
        setLoading(false)
      }
    };
    fetchStudents();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      fix: "left" // 固定列
    },
    {
      title: "Basic",
      children: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age"
        }
      ]
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class"
    }
  ];

  if (loading)
    // return <p>Loading</p>;
    return <Spin size="large" />;
  if (error)
    // return <p style={{ color: "red" }}>{error}</p>;
    return <Alert message={ error } type="error" showIcon />

  return (
    <div>
      <h1>Student List</h1>
      {/* <ul>
        {
          students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.age} - { student.class }
            </li>
          ))
        }
      </ul> */}
      <Table
        dataSource={students}
        columns={columns}
        bordered
        rowKey="id"
        size="small"></Table>
    </div>
  )
};

export default StudentComponent;
