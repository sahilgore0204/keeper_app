import React from 'react';
//import DeleteIcon from '@mui/icons-material/Delete'; 
export default function Note(props){
    function deleteTask(event){
        let id=event.target.id;
        props.delete(id);
        //console.log(id);
    }
    return (<div className='note'>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button id={props.id} onClick={deleteTask}>Delete</button>
    </div>);
}