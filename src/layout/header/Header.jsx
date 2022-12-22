import { useState } from "react";
import "./style.scss";

export default function Header({ handleCreateNewTask }) {
  const [keyword, setKeyword] = useState("");
  const handleSearch = () => {
    window.location.search = `?keyword=${keyword.trim()}`;
    setKeyword("");
  };

  return (
    <div className="header">
      <div className="header__left">
        <button onClick={handleCreateNewTask}>Create New Task</button>
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
