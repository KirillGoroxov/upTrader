import React, { useState } from "react";
import styles from "./SubTasks.module.scss";
import { useDispatch } from "react-redux";
const SubTasks = ({ item, boardId }) => {
  const [value, setValue] = useState("Текст подзадачи");
  const dispatch = useDispatch();
  const tasks = item.subtasks;
  const addTask = () => {
    if (value !== "Текст подзадачи") {
      const newTask = {
        id: tasks.length + 1,
        text: value,
        checked: false,
      };
      tasks.push(newTask);
      setValue("Текст подзадачи");
    }
  };
  const checkTask = (e) => {
    tasks[e.target.id].checked = !tasks[e.target.id].checked;
    dispatch({
      type: "DROP",
    });
  };
  return (
    <div className={styles.subtasks}>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => value === "Текст подзадачи" && setValue("")}
        onBlur={() => value === "" && setValue("Текст подзадачи")}
      ></textarea>
      <button onClick={() => addTask()}>Создать</button>
      {tasks.map((task, i) => {
        return (
          <div className={styles.task} key={i}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={(e) => checkTask(e)}
              id={i}
            />
            <span>{task.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SubTasks;
