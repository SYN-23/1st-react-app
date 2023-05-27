
import './Todo.css'

function Todo(props){
  
     
    return(
     <div id='change'>
       {/* <h1>{props.title.priority}</h1> */}
       <h1>{props.title.title}</h1> 
       <div id='btnholder'>
       <button>Edit</button>
       <button>Delete</button>
       </div>
     </div>

    );
}

export default Todo;