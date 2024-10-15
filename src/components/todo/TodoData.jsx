import './todo.css'

const TodoDaTa = (props) => {
const {name, age, collage, newTodoList} = props
    return (
        <div className="todo-Data">
        {JSON.stringify(props.newTodoList)}
      </div>
    );
}

export default TodoDaTa;