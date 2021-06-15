import React, { useState, useEffect} from 'react';
import UsersSearcher from './UsersSearcher.jsx';

export const UserContext = React.createContext({});

function UserProvider(){ 
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);

    const contextValue={
        users,
        query,
        setQuery,
        loading,
        error
    }

    useEffect(() =>{
        
        const fetchingApi = async() => {
            const API_URL = `https://api.github.com/search/users?q=${query}`
            try{
                setLoading(true);
                setError(null);
                
                const response = await fetch(API_URL);
                if(response.ok){
                    const fetchedResult = await response.json();
                    const usersData = fetchedResult.items;
                    setUsers(() =>  usersData)
                } else {
                    const errorResult = await response.json();
                    setError(errorResult);
                }
                setLoading(false);
            } catch(error){
                setError(error);
            }
        }

        if(query !== null && query !== "" ){
            fetchingApi();
        }
        
    }, [query]);
    
    
    return (
        <UserContext.Provider value = {contextValue}>
            <input type="text"  onChange= {(e) => setQuery(e.target.value)} placeholder="Search for user"/>
            <UsersSearcher />
        </UserContext.Provider>
    )
};

export default UserProvider;