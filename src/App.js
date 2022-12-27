import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import { ROUTER } from "./constants";
import Home from "./screens/Home";
import All from "./screens/All";
import New from "./screens/New";
import Doing from "./screens/Doing";
import Done from "./screens/Done";
import EditAddNew from "./screens/edit-add-new/EditAddNew";

function App() {
  return (
    <div className="layout">
      <Routes>
        <Route
          path={ROUTER.NOT_FOUND}
          element={
            <Link
              to={ROUTER.ALL}
              style={{
                display: "block",
                margin: "30% auto",
                fontWeight: "bold",
                fontSize: "60px",
                width: "475px",
              }}
            >
              404 NOT FOUND
            </Link>
          }
        />
        <Route path={ROUTER.ALL} element={<Home />}>
          <Route path={ROUTER.ADD_NEW} element={<EditAddNew />} />
          <Route path={ROUTER.NEW} element={<New />} />
          <Route path={ROUTER.DOING} element={<Doing />} />
          <Route path={ROUTER.DONE} element={<Done />} />
          <Route path={ROUTER.DETAIL} element={<EditAddNew isEditTask />}>
            <Route
              path={ROUTER.DETAIL_TASK}
              element={<EditAddNew isEditTask />}
            />
            <Route index element={<div>Không có</div>} />
          </Route>
          <Route index element={<All />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
