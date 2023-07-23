import axiosInstance from "../_config/axios_cfg";

export const listResults = () => {
    return axiosInstance.get("/result/");
}