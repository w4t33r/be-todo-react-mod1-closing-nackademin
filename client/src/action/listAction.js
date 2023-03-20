import axios from 'axios'

//const url = "http://localhost:5000/api/list"

const getAllToDo = (setToDo) => {
    axios
        .get("http://localhost:5000/api/list/")
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {

    axios
        .post(`http://localhost:5000/api/list/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`http://localhost:5000/api/list/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
        .post(`http://localhost:5000/api/list/delete`, { _id })
        .then((data) => {
            console.log('NT')
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }
