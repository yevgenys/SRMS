import axiosInstance from "../_config/axios_cfg";

export const createResults = (student_pk, course_pk, score) => {
    return axiosInstance.post("/result/", {
        student: student_pk,
        course: course_pk,
        score: score
    });
}