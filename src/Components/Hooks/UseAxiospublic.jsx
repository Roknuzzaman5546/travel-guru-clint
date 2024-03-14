import axios from "axios";

const UseAxiospublic = () => {
    const axiospublic = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return axiospublic;
};

export default UseAxiospublic;