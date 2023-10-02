import React, { useState } from "react";
import styles from "./Task.module.scss";
import Priority from "./Priority/Priority";
import Comments from "./Comments/Comments";
import SubTasks from "./SubTasks/SubTasks";
import Edit from "./Edit/Edit";
import Icons from "./Icons/Icons";
import { useDispatch } from "react-redux";

export const Context = React.createContext();
const Task = ({
  currentBoard,
  currentItem,
  index,
  board,
  item,
  setCurrentBoard,
  setCurrentItem,
}) => {
  const dayWork = item.dayWork;
  const dateEnd = item.dateEnd;
  const priority = item.priority;
  const dispatch = useDispatch();
  const border =
    (board.title === "Queve" && "rgb(162, 123, 123)") ||
    (board.title === "Development" && "rgb(199, 176, 73)") ||
    (board.title === "Done" && "rgb(183, 246, 132)");
  const date = new Date().toLocaleDateString();
  const dateNow = date.split(".").reverse().join("-");
  const a = Date.parse(item.dateCreate.split("/").reverse().join("-"));
  const b = Date.parse(dateNow);
  const days = Math.floor(Math.abs(b - a) / (1000 * 60 * 60 * 24));
  const dragOver = (e) => {
    e.preventDefault();
  };
  const dragLeave = (e) => {};
  const dragStart = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };
  const dragEnd = (e) => {};
  const drop = (e, board) => {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 0);
    board.items.splice(e.target.id.split("-")[1], 0, currentItem);
    // создаем дату окончания задачи
    if (board.title === "Done" && currentBoard !== "Done") {
      const a = Date.parse(
        currentItem.dateCreate.split("/").reverse().join("-")
      );
      currentItem.dayWork = Math.floor(Math.abs(b - a) / (1000 * 60 * 60 * 24));
    } else {
      currentItem.dayWork = null;
    }
    dispatch({ type: "DROP" });
  };
  const [comments, setComments] = useState(false);
  const [subTasks, setSubTasks] = useState(false);
  const [edit, setEdit] = useState(false);
  const openEdit = () => {
    setEdit(true);
    document.body.style.overflow = "hidden";
  };
  const lookComments = () => {
    setComments(!comments);
    subTasks && setSubTasks(false);
  };
  const lookSubTasks = () => {
    setSubTasks(!subTasks);
    comments && setComments(false);
  };
  const checkTask = () => {
    dispatch({ type: "CHECK", payload: { boardId: board.id, item } });
  };
  return (
    <div
      className={styles.item}
      onDragOver={(e) => dragOver(e)}
      onDragLeave={(e) => dragLeave(e)}
      onDragStart={(e) => dragStart(e, board, item)}
      onDragEnd={(e) => dragEnd(e)}
      onDrop={(e) => drop(e, board)}
      draggable={!edit && true}
      name="item"
      id={"task-" + index}
      style={{
        border: `1px solid ${border}`,
        position: board.title === "Done" && "relative",
      }}
    >
      {board.title === "Done" && <div className={styles.back}></div>}
      <div className={styles.status}>
        <div>{board.title}</div>
      </div>
      <div className={styles.title} id={"tilte-" + index}>
        <span id={"num-" + index}>{item.id}.</span>
        {item.title}
        <Priority priority={priority} item={item} board={board} />
      </div>
      <div className={styles.description} id={"description-" + index}>
        {item.description}
      </div>
      <div className={styles.date} id={"dateCreate-" + index}>
        Дата создания: {item.dateCreate}
      </div>
      {dateEnd && (
        <div className={styles.date} id={"dateEnd-" + index}>
          Дата окончания: {dateEnd}
        </div>
      )}
      <div className={styles.date} id={"dateWork-" + index}>
        Дней в работе: {dayWork ? dayWork : days}
      </div>
      <Icons
        lookComments={lookComments}
        openEdit={openEdit}
        lookSubTasks={lookSubTasks}
        checked={item.checked}
        checkTask={checkTask}
        index={index}
      />
      {comments && (
        <Context.Provider value={{ item }}>
          <Comments item={item} />
        </Context.Provider>
      )}
      {subTasks && <SubTasks item={item} boardId={board.id} />}
      {edit && <Edit item={item} setEdit={setEdit} />}
    </div>
  );
};

export default Task;
