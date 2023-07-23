import axiosInstance from "./axios_cfg";

export const listResults = () => {
    return axiosInstance.get("/result/");
}