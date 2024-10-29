import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import './style.css';
import TodoDetails from './TodoDetails';
import { Skeleton } from '@mui/material';

const Todo = () => {
    const [loading, setLoading] = useState(true);
    const [todoList, setTodoList] = useState([]);
    const [todoDetails, setTodoDetails] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [error, setError] = useState('');

    async function fetchTodo() {
        try {
            const apiResponse = await fetch('https://dummyjson.com/todos');
            const result = await apiResponse.json();
            setTodoList(result.todos);
        } catch (err) {
            console.log(err);
            setError('Failed to fetch todos');
        } finally {
            setLoading(false);
        }
    }

    async function fetchTodoId(getCurrentTodo) {
        try {
            const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodo}`);
            const result = await apiResponse.json();
           if(result){
            setTodoDetails(result);
           }
            setOpenDialog(true);   
        } catch (err) {
            console.log(err);
            setError('Failed to fetch todos');
        }
    }

    const handleClose = () => {
        setOpenDialog(false);
        setTodoDetails(null); 
    };

    

    useEffect(() => {
        fetchTodo();
        
    }, []);

    if(loading){
        return <Skeleton variant='rectangulat' width={650} height={650} />
    }

    return (
        <div className="mainWrapper">
            <h3 className="headerTitle">Todo</h3>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="todoListWrapper">
                    {todoList.length > 0 ? (
                        todoList.map((listItem) => (
                            <TodoItem key={listItem.id} item={listItem} fetchTodoId={fetchTodoId} />
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            )}
            <TodoDetails openDialog={openDialog} todoDetails={todoDetails} handleClose={handleClose} setOpenDialog={setOpenDialog} />
        </div>
    );
};

export default Todo;
