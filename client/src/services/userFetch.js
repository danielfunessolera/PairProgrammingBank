import axios from "axios";

const uri = "http://localhost:8040/";

const fetchUser = async () => {
    try {
        const response = await axios.get(`${uri}users/1`);
        return response.data; 
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default fetchUser;