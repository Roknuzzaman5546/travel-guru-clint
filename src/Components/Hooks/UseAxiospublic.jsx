import axios from "axios";

const UseAxiospublic = () => {
    const axiospublic = axios.create({
        baseURL: 'https://travel-guru-server-five-gamma.vercel.app'
    })
    return axiospublic;
};

export default UseAxiospublic;