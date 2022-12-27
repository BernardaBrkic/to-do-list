import React, { useRef } from "react";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  return (
    <React.Fragment>
      <h2>New task form</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <input type="text" ref={taskInputRef} />
        <button>{props.loading ? "Sending..." : "Add Task"}</button>
      </form>
    </React.Fragment>
  );
};

export default TaskForm;
