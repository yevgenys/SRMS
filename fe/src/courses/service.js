import axiosInstance from "../_config/axios_cfg";

export const listCourses = () => {
    return axiosInstance.get("/course/");
}