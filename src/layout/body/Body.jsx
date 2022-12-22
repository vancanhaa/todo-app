import "./style.scss";
import TodoItem from "../../components/todo-item/TodoItem";
import { MODE, STATUS } from "../../constants";
import { useEffect, useState } from "react";
import AddNewForm from "../../shared/add-newform/AddNewForm";
import { localStorageUlti } from "../../functions/localStorage";

const {get, set} = localStorageUlti('todoItems', [])

export default function Body({ mode, handleChangeRenderMode }) {
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        setTodoItems(get())
    }, [])

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
                            const todoItemsLocalStorage = get();
                            setTodoItems([data, ...todoItemsLocalStorage]);
                            set([data, ...todoItemsLocalStorage])
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