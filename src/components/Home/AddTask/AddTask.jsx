import React, { useState } from "react";
import styles from "./AddTask.module.scss";
import { useDispatch } from "react-redux";

const AddTask = ({ boards }) => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const openModal = () => {
    document.body.style.overflow = "hidden";
    setAdd(true);
  };
  const closeAdd = () => {
    setAdd(false);
    document.body.style.overflow = "";
    setTitle("");
    setDescription("");
  };
  const save = () => {
    if (title && description) {
      const sum = boards
        .map((board) => board.items.length)
        .reduce((a, b) => a + b, 0);
      const id = sum + 1;
      const newItem = {
        id: id,
        title: title,
        description: description,
        dateCreate: new Date().toLocaleDateString().split(".").join("/"),
        dateEnd: null,
        dayWork: 0,
        priority: 1,
        checked: false,
        comments: [],
        subtasks: [],
      };
      dispatch({ type: "ADD_TASK", payload: newItem });
      closeAdd();
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.add} onClick={() => openModal()}>
        Создать задание
      </div>
      {add && (
        <div className={styles.modal} style={{ top: window.scrollY }}>
          <img
            src="./../../../icons/plus.svg"
            alt="close"
            onClick={() => closeAdd()}
          />
          <div className={styles.create}>
            Название
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            Описание
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={() => save()}>Сохранить</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
