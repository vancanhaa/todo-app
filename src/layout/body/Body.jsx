import "./style.scss";
import TodoItem from "../../components/todo-item/TodoItem";
import { MODE, STATUS } from "../../constants";
import { useState } from "react";
import AddNewForm from "../../shared/form/Form";

export default function Body({ mode, handleChangeRenderMode }) {
    const [todoItems, setTodoItems] = useState([]);

    const renderTodoItem = () => {
        return (todoItems.map((item, index) => <TodoItem key={index} {...item}/>))
    }

    const chooseMode = () => {
        switch (mode) {
            case MODE.SHOW_LIST:
                return renderTodoItem();
            case MODE.ADD_NEW:
                return (
                    <AddNewForm 
                        handleSubmit={(e) => {
                            e.preventDefault();
                            const data = {
                                title: e.target[0].value,
                                creator: e.target[1].value,
                                description: e.target[2].value,
                                status: STATUS.NEW
                            };
                            setTodoItems([data, ...todoItems]);
                            handleChangeRenderMode(MODE.SHOW_LIST)
                        }}
                    />
                )
            default:
                return renderTodoItem();
        }
    }

    return (
        <div className="body">
            {chooseMode()}
        </div>
    )
}