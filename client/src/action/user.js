import axios from "axios";
import {setUser} from "../reducer/userReducer";


export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration',{
            email,
            password
        })
        alert((await response).data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}





export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            })
            dispatch(setUser(response.data.user))
          localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
