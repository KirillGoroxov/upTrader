import React, { useState } from "react";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";

const Search = ({ boards, setFilter }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState(1);
  const select = () => {
    typeSearch === 1 ? setTypeSearch(2) : setTypeSearch(1);
  };
  const searchTask = (e) => {
    if (search !== "") {
      setFilter(true);
      dispatch({ type: "SEARCH", payload: { typeSearch, search } });
    }
  };
  const skip = () => {
    setSearch("");
    setFilter(false);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <img src="./../../icons/plus.svg" alt="skip" onClick={() => skip()} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => searchTask()}>Поиск</button>
      </div>
      <div>
        <input
          type="radio"
          checked={typeSearch === 1 ? true : false}
          onChange={() => select()}
        />
        <span>По номеру</span>
      </div>
      <div>
        <input
          type="radio"
          checked={typeSearch === 2 ? true : false}
          onChange={() => select()}
        />
        <span>По названию</span>
      </div>
    </div>
  );
};

export default Search;
