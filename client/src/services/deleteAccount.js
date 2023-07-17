import axios from "axios";

const uri = "http://localhost:8040/";

const deleteAccount = async (userId, id) => {
    try {
        const response = await axios.delete(`${uri}users/${userId}/bankaccount/${id}`)
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default deleteAccount;