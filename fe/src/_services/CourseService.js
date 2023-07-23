import axiosInstance from "./axios_cfg";

export const listCourses = () => {
    return axiosInstance.get("/course/");
}

export const deleteCourse = (pk) => {
    return axiosInstance.delete(`/course/${pk}`);
}