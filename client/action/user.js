import axios from "axios";

export const registration = async (email, password) => {
    const response = axios.post('https://localhost:5000/api/auth/registration', {
        email,
        password
    })
}