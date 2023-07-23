import axiosInstance from "../_config/axios_cfg";

export const deleteCourse = (pk) => {
    return axiosInstance.delete(`/course/${pk}`);
}

export const createCourse = (name) => {
    return axiosInstance.post('/course/', {
        name: name
    });
}