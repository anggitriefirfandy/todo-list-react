import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { VscCheck } from "react-icons/vsc";
// import { InputGroup } from 'react-bootstrap';
// import {FormControl} from "react-bootstrap"
const Todo = (props) => {
  const { item, editTodo, deleteTodo, completeTodo } = props;

  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const edit = (id, value, e) => {
    if (e.which === 13) {
      editTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    //valueOf
    <div className="wrap-list">
      <li key={item.id} className="list">
        <div className="input-group">
          {item.completed === false && (
            <button
              className="btn btn-success"
              onClick={() => completeTodo(item.id)}
            >
              <VscCheck />
            </button>
          )}
          <input
            type="text"
            className="form-control"
            ref={inputRef}
            disabled={inputRef}
            defaultValue={item.item}
            onKeyPress={(e) => edit(item.id, inputRef.current.value, e)}
          />
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => changeFocus()}
          >
            <AiFillEdit /> {""}
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => deleteTodo(item.id)}
          >
            {""}
            <IoClose />
          </button>
          {""}
        </div>

        {item.completed}
      </li>
    </div>
  );
};
export default Todo;
