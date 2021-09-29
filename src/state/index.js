import { atom } from "recoil";
import {AddUser, getUsers, removeUsers, UpdateStatus} from "../api";

const initialize = () => async ({setSelf}) => {
    const response = await getUsers();
    setSelf(response.data);
}

export const UserState = atom({
    key: 'UserState',
    default: [],
    effects_UNSTABLE: [
        initialize()
    ]
})

export const addUserOperation = ({snapshot, set}) => async (newUser) =>{
    const release = snapshot.retain();
    const response = await AddUser(newUser);
    const users = await snapshot.getPromise(UserState);
    set(UserState, [...users, response.data]);
    release();
}

export const updateUserStatus = ({snapshot, set}) => async (id, status) => {
    const release = snapshot.retain();
    const response = await UpdateStatus(id, status);
    if(response.data.success){
        const users = await snapshot.getPromise(UserState);
        const updated = users.map((data) => {
            let user = Object.assign({},data)
            if (data._id === id) {
                user.status = status;
            }
            return user;
        });
        return set(UserState, updated);
    }
    release();
}

export const removeUsersOperation = ({snapshot, set}) => async (ids) => {
    const arr = Array.from(ids);
    const response = await removeUsers(arr);
    if(response.data.success) {
        const users = await snapshot.getPromise(UserState);
        const userFiltered = users.filter(user => !arr.includes(user._id))
        set(UserState, userFiltered);
        ids.clear();
    }
}