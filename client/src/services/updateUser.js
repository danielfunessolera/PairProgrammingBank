import axios from "axios";

const uri = "http://localhost:8040/";

const updateUser = async ( firstName, lastName, email, phone) => {
    try {
        const response = await axios.put(`${uri}users/1`, {
            firstName,
            lastName,
            email,
            phone
        })
        .then (function (response) {
            console.log(response)
        })
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default updateUser;