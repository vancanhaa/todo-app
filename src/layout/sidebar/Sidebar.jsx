import "./style.scss"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <p>All Task</p>
            </div>
            <div className="sidebar__item">
                <p>New Task</p>
            </div>
            <div className="sidebar__item">
                <p>Doing Task</p>
            </div>
            <div className="sidebar__item">
                <p>Done Task</p>
            </div>
        </div>
    )
}