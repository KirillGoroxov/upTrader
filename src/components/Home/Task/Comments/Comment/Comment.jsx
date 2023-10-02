import React, { useContext, useState } from "react";
import styles from "./Comment.module.scss";
import CommentItem from "../CommentItem/CommentItem";
import { Context } from "../../Task";
const Comment = ({ text, commentsList, id }) => {
  const [comments, setComments] = useState(false);
  const [value, setValue] = useState("Ваш комментарий");
  const { item } = useContext(Context);
  const sendComment = () => {
    if (value !== "" && value !== "Ваш комментарий") {
      const com = item.comments[id].comments;
      com.push({ id: com.length + 1, text: value, comments: [] });
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
        <div>
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
          {commentsList.map((comment, i) => {
            return (
              <CommentItem
                commentsList={comment.comments}
                text={comment.text}
                key={i}
                highId={id}
                id={i}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
