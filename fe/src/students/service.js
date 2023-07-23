import axiosInstance from "../_config/axios_cfg";

export const listStudents = () => {
    return axiosInstance.get("/student/");
}

