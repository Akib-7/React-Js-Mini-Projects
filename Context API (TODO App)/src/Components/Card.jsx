import React, { useRef, useState } from "react";
import { useTodo } from "../Contexts/ToDoContext";

const Card = ({ todo }) => {
  //console.log(todos);
  const { del, save, toggleComplete } = useTodo();
  const [editable, setEditable] = useState(false);
  const [newMsg, SetMsg] = useState(todo.msg);
  const inputRef = useRef(null);
  const [status, setStatus] = useState(todo.completed);

  const handleStatus = () => {
    const newStatus = !status;
    setStatus(newStatus);
    toggleComplete(todo, newStatus);
  };

  const handleDelete = () => {
    del(todo);
  };
  const handleUpdate = () => {
    //In this function we are only making the input field editable
    setEditable(!editable);

    if (inputRef != null) {
      inputRef.current.focus();
    }
  };

  const handleSave = () => {
    //In this function the actual update of TODO will be done
    setEditable(!editable);

    toggleComplete(todo, status);
    save(todo, newMsg);
  };
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="mr-2"
        checked={status}
        onChange={handleStatus}
      />
      {editable ? (
        <button
          onClick={handleSave}
          className="bg-purple-600 p-2 rounded-l text-white "
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleUpdate}
          className="bg-purple-600 p-2 rounded-l text-white "
        >
          Update
        </button>
      )}
      <input
        readOnly={!editable}
        type="text"
        value={newMsg}
        onChange={(e) => SetMsg(e.target.value)}
        className={
          status && !editable
            ? `line-through h-full focus:outline-none px-5 p-2 w-[490px]`
            : `h-full focus:outline-none px-5 p-2 w-[490px]`
        }
        ref={inputRef}
      />
      <button
        disabled={editable}
        className="bg-red-600 p-2 disabled:bg-gray-600 rounded-r text-white "
        onClick={handleDelete}
      >
        Delete
      </button>
      {/* <h2>{todo.id}</h2>
      <h2>{todo.status ? "Complete" : "Incomplete"}</h2> */}
    </div>
  );
};

export default Card;
