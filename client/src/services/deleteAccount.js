import axios from "axios";

const uri = "http://localhost:8040/";

const deleteAccount = async (id) => {
    try {
        const response = await axios.delete(`${uri}users/1/bankaccount/${id}`)
        .then (function (response) {
        })
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default deleteAccount;