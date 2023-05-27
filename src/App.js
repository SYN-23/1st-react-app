// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import Name from './modules/Name';
import Todo from './modules/Todo';

const data=[
  {title:"Buy a book",},
  {title:"Buy a Pen",}
]

function App() {

  const [expenses,setExpenses]=useState(data);
 
   
    
   const saveName=(enterName)=>{
       
       setExpenses((prevExpenses)=>{
        return [enterName,...prevExpenses]
       });
       
   }
  
  return (
    <div id='todo'>
     <h1 id='head'>Add New Todo</h1>
     <Name onSaveName={saveName}></Name>
      
     {
      expenses.map((newData)=>(
        <Todo id='desc' key={Math.random.toString()} title={newData}></Todo>
      ))
     }
     {/* <Todo id='desc' title={data[0]} ></Todo> */}
    </div>
  );
}

export default App;
