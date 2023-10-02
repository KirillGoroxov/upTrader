import React, { useState } from "react";
import styles from "./Priority.module.scss";
import { useDispatch } from "react-redux";

const Priority = ({ priority, item }) => {
  const dispatch = useDispatch();
  const priorityColor =
    priority === 1
      ? "#afd871"
      : priority === 2
      ? "#d8c271"
      : priority === 3 && "#e17a7a";
  const priorityLevel =
    priority === 1
      ? "Низкий "
      : priority === 2
      ? "Средний "
      : priority === 3 && "Высокий ";
  const [priorityVisable, setPriorityVisable] = useState(false);
  const hoverPriority = (e) => {
    setPriorityVisable(true);
  };
  const leavePriority = (e) => {
    setPriorityVisable(false);
  };
  const clickPriority = (e) => {
    let p = item.priority;
    if (p === 1) item.priority = 2;
    if (p === 2) item.priority = 3;
    if (p === 3) item.priority = 1;
    dispatch({
      type: "DROP",
    });
  };
  return (
    <div className={styles.priority}>
      <div
        onClick={(e) => clickPriority(e)}
        style={{ backgroundColor: priorityColor }}
        onMouseEnter={(e) => hoverPriority(e)}
        onMouseLeave={(e) => leavePriority(e)}
      ></div>
      {priorityVisable && (
        <div className={styles.level}>{priorityLevel} приоритет</div>
      )}
    </div>
  );
};

export default Priority;
