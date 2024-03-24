import axios from "axios";

const UseaxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return axiosPublic;
};

export default UseaxiosPublic;
