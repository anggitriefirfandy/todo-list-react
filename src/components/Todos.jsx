import React, { useState } from "react";
import { pushTodos } from "../redux/reducer/reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushTodo: (obj) => dispatch(pushTodos(obj)),
  };
};
const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const push = () => {
    if (todo === "") {
      alert("the input box is still empty, please fill in first");
    } else {
      props.pushTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div className="todos-header">
      <h1>What's the plan for today?</h1>
      <div className="input-group group-input">
        <input
          className="form-control"
          type="text"
          onChange={(e) => handleChange(e)}
          value={todo}
          placeholder={"What to do"}
        />
        <button className="btn btn-primary " onClick={() => push()}>
          tambahkan
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
