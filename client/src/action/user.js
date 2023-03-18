import axios from "axios";

export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration',{
            email,
            password
        })
        alert(response)
        alert((await response).data.message)
    } catch (e) {
        alert(e)
        console.log(e)
    }
}