import axios from "axios";

export default axios.create({
    baseURL: 'https://react-test-afab9-default-rtdb.europe-west1.firebasedatabase.app'
})