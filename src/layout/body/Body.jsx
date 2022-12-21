import "./style.scss";
import TodoItem from "../../components/todo-item/TodoItem";
import { todoList } from "../../constants";

export default function Body() {
    return (
        <div className="body">
            {todoList.map((item, index) => {
                return <TodoItem key={index}
                    {...item}
                />
            })}
        </div>
    )
}