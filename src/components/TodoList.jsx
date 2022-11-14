import React, { useState } from "react";
import { connect } from "react-redux";
import {
  pushTodos,
  deleteTodos,
  editTodos,
  completeTodos,
} from "../redux/reducer/reducer";
import Todo from "./Todo";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushTodo: (obj) => dispatch(pushTodos(obj)),
    deleteTodo: (id) => dispatch(deleteTodos(id)),
    editTodo: (obj) => dispatch(editTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const TodoList = (props) => {
  const [sort, setSort] = useState("active");

  return (
    <div>
      {/* button active, completed, dan all */}
      <div className="buttonFilter">
        <button className="all" onClick={() => setSort("all")}>
          All
        </button>
        <button className="active" onClick={() => setSort("active")}>
          Active
        </button>
        <button className="completed" onClick={() => setSort("completed")}>
          Complete
        </button>
      </div>

      {/* list todo list yang sudah ditambahkan */}
      <ul>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed == false && (
                  <Todo
                    key={item.id}
                    item={item}
                    deleteTodo={props.deleteTodo}
                    editTodo={props.editTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}

        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <Todo
                    key={item.id}
                    item={item}
                    deleteTodo={props.deleteTodo}
                    editTodo={props.editTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}

        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
              return (
                <Todo
                  key={item.id}
                  item={item}
                  deleteTodo={props.deleteTodo}
                  editTodo={props.editTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
