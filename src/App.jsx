import './components/todo/todo.css';
import TodoDaTa from './components/todo/TodoData';
import TodoGetData from './components/todo/TodoGetData';
import TodoTittle from './components/todo/TodoTittle'; './components/todo/TodoTittle';

const App = () => {
  const index = {
    ten: "Duy",
    age: "20",
    collage: "stu"

  }
  return (
    <div className="ToDo-Container">
      <TodoTittle
        name = {index.ten}
        age ={index.age}
        collage = {index.collage}
      />

      <TodoGetData
        name = {index.ten}
        age ={index.age}
        collage = {index.collage}
      />

      <TodoDaTa 
        name = {index.ten}
        age ={index.age}
        collage = {index.collage}
      />
      
    </div>
  )
}

export default App
