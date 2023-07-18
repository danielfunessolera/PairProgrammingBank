import axios from "axios";

const uri = "http://localhost:8040/";

const createBankAccount = async (id, accId, form) => {
    try {
        const response = await axios.post(`${uri}users/${id}/bankaccount/createaccount`, { 
            id: accId,
            accountName: form.accountName,
            bankName: form.bankName,
            initialAmount: form.initialAmount
         });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default createBankAccount;