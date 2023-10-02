import React, { useContext, useState } from "react";
import styles from "./Comments.module.scss";
import Comment from "./Comment/Comment";
import { Context } from "../Task";

const Comments = () => {
  const [value, setValue] = useState("Ваш комментарий");
  const { item } = useContext(Context);
  const sendComment = () => {
    if (value !== "" && value !== "Ваш комментарий") {
      const com = item.comments;
      com.push({ id: com.length + 1, text: value, comments: [] });
      setValue("Ваш комментарий");
    }
  };
  return (
    <div className={styles.commentsContainer}>
      <div className={styles.input}>
        <textarea
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => value === "Ваш комментарий" && setValue("")}
          onBlur={() => value === "" && setValue("Ваш комментарий")}
        />
        <button onClick={() => sendComment()}>Отправить</button>
      </div>
      <div className={styles.comments}>
        {item.comments.map((comment, i) => {
          return (
            <Comment
              text={comment.text}
              key={i}
              id={i}
              commentsList={comment.comments}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
