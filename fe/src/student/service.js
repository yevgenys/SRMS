import axiosInstance from "../_config/axios_cfg";

export const deleteStudent = (pk) => {
    return axiosInstance.delete(`/student/${pk}`);
}

export const createStudent = (firstName, lastName, dateOfBirth, email) => {
    return axiosInstance.post('/student/', {
        "first_name": firstName,
        "last_name": lastName,
        "date_of_birth": dateOfBirth,
        "email": email
    });
}