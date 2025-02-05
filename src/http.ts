import axios from "axios";
import { Student } from "./types";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

// 获取学生列表
export const getStudents = async (): Promise<Student[]> => {
  const reponse = await apiClient.get<Student[]>("/students");
  return reponse.data;
};

// 添加学生
export const addStudent = async (student: Student) => {
  const response = await apiClient.post("/students", student);
  return response.data;
};

// 删除学生
export const deleteStudent = async (id: number) => {
  await apiClient.delete(`/students/${id}`);
};
