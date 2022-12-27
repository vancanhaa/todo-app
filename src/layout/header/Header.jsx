import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ROUTER } from "../../constants";
import "./style.scss";

export default function Header({ handleCreateNewTask }) {
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    searchParams.set("keyword", keyword.trim().toLowerCase());
    setSearchParams(searchParams);
    setKeyword("");
  };

  return (
    <div className="header">
      <div className="header__left">
        <button onClick={handleCreateNewTask}>
          <Link to={ROUTER.ADD_NEW}>Create New Task</Link>
        </button>
      </div>
      <div className="header__right">
        <input
          type="text"
          placeholder="Type something to search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
