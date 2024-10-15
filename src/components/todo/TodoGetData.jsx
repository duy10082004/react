import './todo.css'



const TodoGetData = (props) => {
    const {addNewTodo} = props;
    const handleClick = () => {
      alert ("clicked");
    }

    const handleOnChange = (index) => {
      console.log ("u Have Typed : ", index);
    }



    //addNewTodo("duy dep trai");
    return (
        <div className="container-input">
        <input className="input" type="text" 
          onChange = {(event) => handleOnChange(event.target.value)}
        />
        <button className="button" onClick = {handleClick} style = {{cursor: "pointer"}}>
          ADD</button>

      </div >
    );
}

export default TodoGetData