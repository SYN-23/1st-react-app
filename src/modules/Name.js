import './Name.css'

import { useState } from 'react';

function Name(props){

    const [text,setText]=useState(" ");
    const addTodo=(event)=>{
        setText(event.target.value);

    }

    const clickme=()=>{
       const data={
         title: text,
       }
       props.onSaveName(data);
       setText(" ");
    }

    
    return(
    <div id="name">
    <input id='intodo' type={Text} placeholder="Add your important Todo" value={text} onChange={addTodo}></input>
    <button onClick={clickme} >Add Todo</button>
    
    </div>
    );
}




export default Name;