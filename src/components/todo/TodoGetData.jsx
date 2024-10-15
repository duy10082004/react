import './todo.css'



const TodoGetData = (props) => {
    const {addNewTodo} = props;

    addNewTodo("duy dep trai");
    return (
        <div className="container-input">
        <input className="input" type="text" />
        <button className="button">ADD</button>

      </div >
    );
}

export default TodoGetData