import axios from 'axios'

//const url = "http://localhost:5000/api/list"

const getAllToDo = (setToDo) => {
    axios
        .get("http://localhost:5000/api/list/full",  {
            headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        .then(({data}) => {

            setToDo(data)
        })
}
//await axios.post(`http://localhost:5000/api/delete`, {_id}, {
  //  headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}

const addToDo = (text, setText, setToDo) => {

    axios
        .post(`http://localhost:5000/api/list/save`, {text}, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        .then((data) => {

            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`http://localhost:5000/api/list/update`, {_id: toDoId, text}, {
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        } )
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => alert(err))

}



const deleteToDo = (_id, setToDo) => {

    axios
        .post(`http://localhost:5000/api/list/delete`, {_id}, {
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        } )
        .then((data) => {
            getAllToDo(setToDo)
        })
        .catch((err) => alert(err))

}


export {getAllToDo, addToDo, updateToDo, deleteToDo}
