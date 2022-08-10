import { useState } from 'react';
import Header from '../components/header';
import InputToDo from '../components/input-to-do';
import ToDoList from '../components/todos-list';

const Main = () => {
  const [todos, setTodos] = useState([]);

  const appendToList = (value) => {
    const newTodo = {
      task: value,
      completed: false,
      index: todos.length + 2,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App w-50 m-auto d-flex flex-column justify-content-center vh-100">
      <Header title="Todos" />
      <InputToDo name="add-todo" append={appendToList} />
      <ToDoList todoList={todos} update={setTodos} />
    </div>
  );
};

export default Main;
