import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ListTodoItem from "../components/list-todo-item/ListTodoItem";
import Footer from "../layout/footer/Footer";
import { localStorageUlti } from "../functions/localStorage";
import { LIST_TO_DO_KEY, STATUS } from "../constants";

const { get } = localStorageUlti(LIST_TO_DO_KEY, []);

export default function Done() {
  const [todoItems, setTodoItems] = useState([]);
  const [searchParam] = useSearchParams();

  useEffect(() => {
    const listTodo = get().filter(
      (item) =>
        item.status === STATUS.DONE &&
        item.title.toLowerCase().includes(searchParam.get("keyword") || "")
    );
    setTodoItems(listTodo);
  }, [searchParam]);

  return (
    <>
      <ListTodoItem todoItems={todoItems} />
      <Footer />
    </>
  );
}
