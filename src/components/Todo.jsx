"use client";
import { useState } from "react";

const Todo = ({text, heading}) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col">
      {heading && <h2 className="text-3xl my-4">Todo</h2>}
      <div className="w-[500px] h-[550px] shadow-lg rounded-lg overflow-y-auto">
        <div className="p-4 flex flex-col gap-3">
          <label className="text-xl text-center">{text}</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type to add"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="border-b-2 text-lg font-light flex-grow focus:outline-none"
            />
            <button
              onClick={addTodo}
              className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
            >
              Add
            </button>
          </div>
          <ul className="mt-4 space-y-2">
            {todos.length === 0 ? (
              <li className="text-center text-gray-500">No {heading ? "todos" :  "notes"} yet.</li>
            ) : (
              todos.map((todo, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-2 rounded-md shadow-sm text-lg flex justify-between items-center"
                >
                  <span>{todo}</span>
                  <button 
                    onClick={() => removeTodo(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
