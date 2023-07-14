import axios from "axios";

const uri = "http://localhost:8040/";

const getTotalSavings = async (id) => {
    try {
        const response = await axios.get(`${uri}users/${id}/savings/bankaccount`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default getTotalSavings;