import React, { useState } from "react";
import styles from "./Edit.module.scss";
const Edit = ({ item, setEdit }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const closeEdit = () => {
    setEdit(false);
    document.body.style.overflow = "";
  };
  const save = () => {
    item.title = title;
    item.description = description;
    closeEdit();
  };

  return (
    <div className={styles.edit} style={{ top: window.scrollY }} id="q">
      <img
        src="./../../../../icons/plus.svg"
        alt="close"
        onClick={() => closeEdit()}
      />
      <div className={styles.inputs}>
        Название
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        Описание
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => save()}>Сохранить</button>
      </div>
    </div>
  );
};

export default Edit;
