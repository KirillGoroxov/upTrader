import React, { useContext, useState } from "react";
import styles from "./CommentItem.module.scss";
import { Context } from "../../Task";
const CommentItem = ({ text, id, commentsList, highId }) => {
  const [comments, setComments] = useState(false);
  const [value, setValue] = useState("Ваш комментарий");
  const { item } = useContext(Context);
  const sendComment = () => {
    setComments(true);
    if (value !== "" && value !== "Ваш комментарий") {
      const com = item.comments[highId].comments[id].comments;
      com.push({ id: com.length + 1, text: value + id });
      setValue("Ваш комментарий");
    }
  };
  return (
    <div className={styles.comment}>
      <div>{text}</div>
      <img
        src="./../../../../icons/comment.svg"
        alt="comments"
        onClick={() => setComments(!comments)}
      />
      {comments && (
        <div className={styles.comment}>
          <div className={styles.input}>
            <textarea
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => value === "Ваш комментарий" && setValue("")}
              onBlur={() => value === "" && setValue("Ваш комментарий")}
            />
            <button onClick={() => sendComment()}>Отправить!</button>
          </div>
          {commentsList.map((comment) => {
            return <div className={styles.lastComment}>{comment.text}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
