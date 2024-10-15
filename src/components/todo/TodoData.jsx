import './todo.css'

const TodoDaTa = (props) => {
const {name, age, collage} = props
    return (
        <div className="todo-Data">
        learn More {name}
      </div>
    );
}

export default TodoDaTa;