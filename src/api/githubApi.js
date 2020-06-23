import axios from '../utils/axios'

const getUsers = async (keyword) => {
    const { data } = await axios.get(`/search/users?q=${keyword}`);
    console.log("Search Data: ", data)

    return data;
}

export default getUsers;