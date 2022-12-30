import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ListTodoItem from "../components/list-todo-item/ListTodoItem";
import Footer from "../layout/footer/Footer";
import { localStorageUlti } from "../functions/localStorage";
import { ITEM_PER_PAGE, LIST_TO_DO_KEY } from "../constants";
import usePagination from "../hooks/usePagination";

const { get } = localStorageUlti(LIST_TO_DO_KEY, []);

export default function All() {
  const [todoItems, setTodoItems] = useState([]);
  const [searchParams] = useSearchParams();
  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todoItems,
    ITEM_PER_PAGE
  );

  useEffect(() => {
    const listTodo = get().filter((item) =>
      item.title.toLowerCase().includes(searchParams.get("keyword") || "")
    );
    setTodoItems(listTodo);
  }, [searchParams]);
  console.log(maxPage)
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
