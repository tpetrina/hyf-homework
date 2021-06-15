import React, { useContext } from 'react';
import {UserContext} from './UserProvider';

function UsersSearcher(){
    const userContext = useContext(UserContext);

    const filterUsers = userContext.users.map((user)=>{
        return(
            <div  key={user.id}>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} alt="user avatar"/>
            </div>
        )
    }) 

    return (
        <div>
            {!filterUsers.length ? <div>No results found</div> : filterUsers}
        </div>
    )
      
};

export default UsersSearcher;