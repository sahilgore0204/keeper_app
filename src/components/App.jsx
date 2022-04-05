import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

export default function App(){
    const [tasks,setTasks]=useState([]);

    function deleteTask(id){
        setTasks((previousState)=>{
            return previousState.filter((task,ind)=>{
                return (ind!==Number(id));
            })
        })
    }
    return (<div>
                <Header />
                <CreateArea taskList={tasks} addTask={setTasks} />
                {tasks.map((task,ind)=>{
                    return <Note key={ind} id={ind} title={task.title} content={task.content} delete={deleteTask} />
                })}
                <Footer/>
            </div>);
}