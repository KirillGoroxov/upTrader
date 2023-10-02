import React from "react";
import styles from "./Icons.module.scss";

const Icons = ({
  lookComments,
  openEdit,
  lookSubTasks,
  checked,
  checkTask,
  index,
}) => {
  return (
    <div className={styles.icons} if={"icons-" + index}>
      <input type="checkbox" checked={checked} onChange={checkTask} />
      <img
        src="./../../../icons/comment.svg"
        alt="comments"
        onClick={() => lookComments()}
      />
      <img
        src="./../../../icons/pencil.svg"
        alt="edit"
        onClick={() => openEdit()}
      />
      <img
        src="./../../../icons/plus.svg"
        alt="subtasks"
        onClick={() => lookSubTasks()}
      />
    </div>
  );
};

export default Icons;
