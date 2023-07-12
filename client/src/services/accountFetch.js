import axios from "axios";

const uri = "http://localhost:8040/";

const fetchAccount = async () => {
    try {
        const response = await axios.get(`${uri}users/1/bankaccount`);
        return response.data; 
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default fetchAccount;