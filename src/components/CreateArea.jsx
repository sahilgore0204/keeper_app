import React,{useState} from "react"
//import AddIcon from '@mui/icons-material/Add'; 
export default function CreateArea(props){
    const [noteInfo,setNoteInfo]=useState({title:"",content:""});
    function handleChange(event){
        const {name,value}=event.target;

        setNoteInfo((previosState)=>{
            return {
                ...previosState,
                [name]:value
            };
        });
    }

    function addNote(){
        props.addTask((previousState)=>{
            return [...previousState,noteInfo];
        });
        setNoteInfo({title:"",content:""});
    }
    function handleSubmit(event){
        event.preventDefault();
    }
    return (<div>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange}  name="title" placeholder="Title" value={noteInfo.title} />
      <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={noteInfo.content} />
      <button onClick={addNote}>Add</button>
    </form>
  </div>);
}