import axios from "axios";

const uri = "http://localhost:8040/";

const loginUser = async ({ userName, password }) => {
    try {
        const response = await axios.post(`${uri}users/login`, null, {
            params: {
                username: userName,
                password: password
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default loginUser;