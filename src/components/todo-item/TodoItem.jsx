import "./style.scss"

export default function TodoItem( { title, creator, status, description } ) {
    return (
        <div className="todo-item">
            <p className="todo-item__title">Title: {title}</p>
            <p className="todo-item__creator">Creator: {creator}</p>
            <p className={`todo-item__status todo-item__status--${status.toLowerCase()}`}>Status: {status}</p>
            <hr className="todo-item__line-break"/>
            <div className="todo-item__description">
                <p>Description:</p>
                <p>{description}</p>
            </div>
        </div>
    )
}