import type {NextPage} from 'next'
import React, {useState, useEffect} from 'react';
import {apiGet} from "../helpers/api";
import {useAppDispatch} from "../redux/hooks";
import {showApiError, showErrorAlert} from "../helpers/alert";
import {UserListResponse} from "../types/UserListResponse";
import {User} from "../types/objects/User";
import {useCookies} from "react-cookie";

const Home: NextPage = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [cookies] = useCookies(['jwt']);
    const dispatch = useAppDispatch();
    useEffect(() => {
        loadUsers();
    }, []);


    async function loadUsers(): Promise<void> {
        if (!cookies.jwt){
            return;
        }
        const response = await apiGet<UserListResponse>("/users").catch(showApiError(dispatch));
        if(!response){
            return;
        }
        if (response?.error) {
            return showErrorAlert(dispatch, response.error.message);
        }
        setUsers(response?.users!);
    }
    if(!cookies.jwt){
        return <div data-testID="pre-logged-in-msg">You can&apos;t see the data on this page until you&apos;re logged in!</div>
    }

    if ( users.length == 0) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <table className="table" data-testID="user-table">
                <thead>
                <tr>
                    <th scope="col" data-testID="col-header-id">#</th>
                    <th scope="col" data-testID="col-header-name">Name</th>
                    <th scope="col" data-testID="col-header-email">Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user =>
                    <tr key={user.id} data-testID={`user-row-${user.id}`}>
                    <td data-testID={`user-id-${user.id}`}>{user.id}</td>
                    <td data-testID={`user-name-${user.id}`}>{user.fullName}</td>
                    <td data-testID={`user-email-${user.id}`}>{user.email}</td>
                </tr>
                )}
                </tbody>
            </table>
            <b data-testID="post-logged-in-msg">These are visible only for those who logged in.</b>
        </div>
    )
}

export default Home
