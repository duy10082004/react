import { useState } from 'react';
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


  const [newTodoList, setNewTodoList] = useState ([
    {id: 1, data: "learn react"},
    {id: 2, data: "learn javascript"},
  ]);

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const addNewTodo = (data) => {
    const newTodoData = {
      id : randomIntFromInterval(3, 100),
      data : data,
    }

    setNewTodoList([...newTodoList, newTodoData]);

    console.log("object count : ", newTodoData);
  }



  return (
    <div className="ToDo-Container">
      <TodoTittle
        name = {index.ten}
        age ={index.age}
        collage = {index.collage}
      />

      <TodoGetData
        addNewTodo={addNewTodo}
        name = {index.ten}
        age ={index.age}
        collage = {index.collage}

      />

      <TodoDaTa 
        name = {index.ten}
        age ={index.age}
        collage = {index.collage}
        newTodoList={newTodoList}
      />
      
    </div>
  )
}

export default App
