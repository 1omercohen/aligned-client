import Axios from 'axios';
const BASE_URL = 'http://localhost:9000/users'

export const getUsers = () => {
    return Axios.get(BASE_URL)
}

export const AddUser = user => {
    return Axios.post(`${BASE_URL}/add`, user)
}

export const UpdateStatus = (userId, status) => {
    return Axios.put(`${BASE_URL}/${userId}`, { status })
}

export const removeUsers = userIds => {
    return Axios.post(`${BASE_URL}/delete`, {users: userIds})
}