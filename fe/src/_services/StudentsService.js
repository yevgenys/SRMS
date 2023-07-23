import axiosInstance from "./axios_cfg";

export const listStudents = () => {
    return axiosInstance.get("/student/");
}

export const deleteStudent = (pk) => {
    return axiosInstance.delete(`/student/${pk}`);
}