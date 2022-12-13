import React, {useEffect} from 'react';
import './App.less'
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {fetchUsers} from "./redux/slices/ActionCreator";



const App = () => {
    const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div className="app">
            {isLoading && <h1>Loading</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)}
        </div>
    );
};

export default App;
