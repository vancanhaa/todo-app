import "./style.scss";
import TodoItem from "../../components/todo-item/TodoItem";
import { MODE, POSITION_KEYWORD, STATUS } from "../../constants";
import { useEffect, useState } from "react";
import AddNewForm from "../../shared/add-newform/AddNewForm";
import { localStorageUlti } from "../../functions/localStorage";
import DetailTaskForm from "../../shared/detail-task-form/DetailTaskForm";

const { get, set } = localStorageUlti("todoItems", []);

export default function Body({ mode, handleChangeRenderMode }) {
  const [todoItems, setTodoItems] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [indexCurrentTask, setIndexCurrentTask] = useState(null);
  const [currentTask, setCurrentTask] = useState({
    title: "",
    creator: "",
    status: STATUS.NEW,
    description: "",
  });

  useEffect(() => {
    setTodoItems(get());
  }, []);
  useEffect(() => {
    const keyword = window.location.search.slice(POSITION_KEYWORD);
    setFilterText(keyword);
  }, []);

  const handleShowDetailTask = (item, index) => {
    setCurrentTask(item);
    setIndexCurrentTask(index);
    handleChangeRenderMode(MODE.DETAIL_TASK);
  };

//   const updateTask = (e, item) => {
//     e.preventDefault();
//     const todoItemsLocalStorage = get();
//     todoItemsLocalStorage.splice(indexCurrentTask, 1, item);
//     setTodoItems([...todoItemsLocalStorage]);
//     set([...todoItemsLocalStorage]);
//     handleChangeRenderMode(MODE.SHOW_LIST);
//   };

//   const deleteTask = (e) => {
//     e.preventDefault();
//     const todoItemsLocalStorage = get();
//     todoItemsLocalStorage.splice(indexCurrentTask, 1);
//     setTodoItems([...todoItemsLocalStorage]);
//     set([...todoItemsLocalStorage]);
//     handleChangeRenderMode(MODE.SHOW_LIST);
//   };

  const handleChangeTask = (e, item) => {
    e.preventDefault();
    const todoItemsLocalStorage = get();
    if (item) {
      todoItemsLocalStorage.splice(indexCurrentTask, 1, item);
    } else {
      todoItemsLocalStorage.splice(indexCurrentTask, 1);
    }
    setTodoItems([...todoItemsLocalStorage]);
    set([...todoItemsLocalStorage]);
    handleChangeRenderMode(MODE.SHOW_LIST);
  };

  function renderTodoItems() {
    return todoItems
      .filter((item) => item.title.includes(filterText))
      .map((item, index) => (
        <TodoItem
          key={index}
          {...item}
          handleClick={() => handleShowDetailTask(item, index)}
        />
      ));
  }

  const chooseMode = () => {
    switch (mode) {
      case MODE.SHOW_LIST:
        return renderTodoItems();
      case MODE.ADD_NEW:
        return (
          <AddNewForm
            handleSubmit={(e) => {
              e.preventDefault();
              const data = {
                title: e.target[0].value,
                creator: e.target[1].value,
                description: e.target[2].value,
                status: STATUS.NEW,
              };
              const todoItemsLocalStorage = get();
              setTodoItems([data, ...todoItemsLocalStorage]);
              set([data, ...todoItemsLocalStorage]);
              handleChangeRenderMode(MODE.SHOW_LIST);
            }}
          />
        );
      case MODE.DETAIL_TASK:
        return (
          <DetailTaskForm
            currentTask={currentTask}
            handleChangeTask={handleChangeTask}
          />
        );
      default:
        return renderTodoItems();
    }
  };

  return <div className="body">{chooseMode()}</div>;
}
