import axios from "axios";

const uri = "http://localhost:8040/";

const postUser = async (id, {firstName, lastName, userName, password}) => {
    try {
        const response = await axios.post(`${uri}users`, {
            id,
            firstName,
            lastName,
            userName,
            password
        })
            .then(function (response) {
                // console.log(response)
            })
    } catch (error) {
        throw error;
    }
}

export default postUser;