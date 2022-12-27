import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";
import thinking from "../../assets/thinking.png";

const TaskList = (props) => {
  let taskList = (
    <section className={classes.empty}>
      <p>No tasks were added on the list. Start adding some!</p>
      <img src={thinking} alt="" />
    </section>
  );

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = "Loading tasks...";
  }

  return (
    <Section>
      <div className={classes.container}>
        <h2>Task list</h2>
        {content}
      </div>
    </Section>
  );
};

export default TaskList;
