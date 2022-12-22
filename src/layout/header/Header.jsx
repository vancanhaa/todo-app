import "./style.scss"

export default function Header({ handleCreateNewTask }) {
    return (
        <div className="header">
            <div className="header__left">
                <button onClick={handleCreateNewTask}>Create New Task</button>
            </div>
            <div className="header__right">
                <input type="text" placeholder="Type something to search" />
                <button>Search</button>
            </div>
        </div>
    )
}