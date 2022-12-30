import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ListTodoItem from "../components/list-todo-item/ListTodoItem";
import Footer from "../layout/footer/Footer";
import { localStorageUlti } from "../functions/localStorage";
import { ITEM_PER_PAGE, LIST_TO_DO_KEY, STATUS } from "../constants";
import usePagination from "../hooks/usePagination";

const { get } = localStorageUlti(LIST_TO_DO_KEY, []);

export default function New() {
  const [todoItems, setTodoItems] = useState([]);
  const [searchParam] = useSearchParams();
  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todoItems,
    ITEM_PER_PAGE
  );

  useEffect(() => {
    const listTodo = get().filter(
      (item) =>
        item.status === STATUS.NEW &&
        item.title.toLowerCase().includes(searchParam.get("keyword") || "")
    );
    setTodoItems(listTodo);
  }, [searchParam]);

  return (
    <>
      <ListTodoItem todoItems={currentData} />
      {maxPage > 1 && (
        <Footer
          currentPage={currentPage}
          jumpPage={jumpPage}
          maxPage={maxPage}
        />
      )}
    </>
  );
}
