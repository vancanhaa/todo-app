import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ListTodoItem from "../components/list-todo-item/ListTodoItem";
import Footer from "../layout/footer/Footer";
import { localStorageUlti } from "../functions/localStorage";
import { LIST_TO_DO_KEY } from "../constants";

const { get } = localStorageUlti(LIST_TO_DO_KEY, []);

export default function All() {
  const [todoItems, setTodoItems] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const listTodo = get().filter((item) =>
      item.title.toLowerCase().includes(searchParams.get("keyword") || "")
    );
    setTodoItems(listTodo);
  }, [searchParams]);
  return (
    
    <>
      <ListTodoItem todoItems={todoItems} />
      <Footer />
    </>
  );
}