import TodoItem from "../todo-item/TodoItem";

export default function ListTodoItem({ todoItems }) {
  return todoItems.map((item, index) => {
    return (
      <TodoItem
        key={`${item.title}_${index}_${item.creator}`}
        title={item.title}
        creator={item.creator}
        status={item.status}
        description={item.description}
        idTask={index}
      />
    )
  });
}
