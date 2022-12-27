import "./style.scss";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

export default function DefaultLayout({ children }) {
    return (
        <div className="layout">
            <Header />
            <Sidebar />
            <div className="body">{children}</div>
        </div>
    )
}