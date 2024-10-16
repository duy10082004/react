import { useState } from 'react';
import './todo.css'



const TodoGetData = (props) => {
    const {addNewTodo} = props;
    const [todoList , setTodoList] = useState ()

  

    const handleOnChange = (index) => {
      //console.log ("u Have Typed : ", index);
      setTodoList(index);
      //(index) => handleClick(index);
    }

    const handleClick = () => {
      addNewTodo(todoList); 
    }

    //addNewTodo("duy dep trai");
    return (
      <div className="container-input">
        <input className="input" type="text" 
          onChange = {(event) => handleOnChange(event.target.value)}
        />
        <button className="button" onClick = {handleClick} style = {{cursor: "pointer"}}>
          ADD
        </button>

        <div>
          what u typed : {todoList}
        </div>
      </div >


    );
}

export default TodoGetData