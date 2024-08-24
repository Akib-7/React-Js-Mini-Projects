import React, { useState } from "react";
import Card from "./Card";
import { useTodo } from "../Contexts/ToDoContext";

const TODO = () => {
  const { add, todos } = useTodo();
  const [text, setText] = useState("");

  const handleAdd = () => {
    add(text);
    setText("");
  };
  return (
    <div className="h-screen w-screen space-y-14">
      {/* TODO Input */}
      <div className="TOP w-full flex flex-col items-center justify-center pt-10 gap-y-[80px]">
        <h1 className="text-4xl text-blue-400 font-bold">TODO LIST</h1>
        <div>
          <input
            type="text"
            placeholder="Enter TODO"
            className="p-2 rounded-l-md w-[520px] focus:outline-none"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 p-2 px-5 rounded-r-md text-white font-semibold hover:bg-blue-700 transition-all "
          >
            ADD
          </button>
        </div>
      </div>

      {/* TODO CARDS */}

      <div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id} className="flex justify-center mb-3">
              <Card todo={todo} />
            </div>
          ))
        ) : (
          <h1>NO TODO</h1>
        )}
      </div>
    </div>
  );
};

export default TODO;
