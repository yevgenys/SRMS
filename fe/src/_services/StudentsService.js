import axiosInstance from "./axios_cfg";

export const listStudents = () => {
    return axiosInstance.get("/student/");
}