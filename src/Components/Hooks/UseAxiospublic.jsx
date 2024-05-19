import axios from "axios";

const UseaxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: 'https://travel-guru-server-five-gamma.vercel.app'
    })
    return axiosPublic;
};

export default UseaxiosPublic;
