import React, { useState } from "react";
import styles from "./Home.module.scss";
import Search from "./Search/Search";
import Boards from "./Boards/Boards";
import AddTask from "./AddTask/AddTask";
import { useSelector } from "react-redux";
const Home = () => {
  const boards = useSelector((state) => state.boards);
  const filterBoards = useSelector((state) => state.filterBoards);
  const [filter, setFilter] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <Search setFilter={setFilter} boards={boards} />
        <AddTask boards={boards} />
      </div>
      <Boards filter={filter} filterBoards={filterBoards} boards={boards} />
    </>
  );
};

export default Home;
