import { Link } from "react-router-dom";
import { SIDEBAR_ITEM } from "../../constants";
import "./style.scss";

export default function Sidebar() {
  function renderSideBarItem() {
    return SIDEBAR_ITEM.map((item, index) => (
      <div key={`${item.title}_${index}`} className="sidebar__item">
        <p>
          <Link to={item.url}>{item.title}</Link>
        </p>
      </div>
    ));
  }

  return <div className="sidebar">{renderSideBarItem()}</div>;
}
