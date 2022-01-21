import axios from "axios";
const token = ""
export default axios.create({
    baseURL: "http://10.0.2.2:5000/api/",
    headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
    },

})