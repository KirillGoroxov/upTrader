import React, { useState } from "react";
import styles from "./Boards.module.scss";
import Task from "../Task/Task";
import { useDispatch } from "react-redux";

const Boards = ({ boards, filter, filterBoards, localBoards }) => {
  const dispatch = useDispatch();
  const [currentBoard, setCurrentBoard] = useState();
  const [currentItem, setCurrentItem] = useState();
  const dragOverBoard = (e) => {
    e.preventDefault();
  };
  const dropBoard = (e, board) => {
    if (e.target.id.split("-")[0] === "board") {
      board.items.push(currentItem);
    }
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    if (board.title === "Done" && currentBoard.title !== "Done") {
      currentItem.dateEnd = new Date()
        .toLocaleDateString()
        .split(".")
        .join("/");
      currentItem.priority = null;
    }
    if (board.title !== "Done") {
      currentItem.dateEnd = null;
      currentItem.priority = 1;
    }
    dispatch({ type: "DROP", payload: {} });
  };
  const boardsArray = filter ? filterBoards : boards;
  return (
    <div className={styles.container}>
      {boardsArray.map((board, index) => (
        <div
          key={index}
          onDragOver={(e) => dragOverBoard(e)}
          onDrop={(e) => dropBoard(e, board)}
          id={"board-" + index}
        >
          <div className={styles.title}>{board.title}</div>
          {board.items.map((item, index) => (
            <Task
              index={index}
              item={item}
              key={index}
              board={board}
              currentBoard={currentBoard}
              setCurrentBoard={setCurrentBoard}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Boards;
