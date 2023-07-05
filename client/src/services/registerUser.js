import axios from "axios";

const uri = "http://localhost:8040/";

const postUser = async ( firstName, lastName, userName, password) => {
    try {
        const response = await axios.post(`${uri}users`, {
            firstName,
            lastName,
            userName,
            password
        })
        .then (function (response) {
            console.log(response)
        })
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default postUser;