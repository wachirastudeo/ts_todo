import { v4 as uuid } from "uuid";

export interface TodoItem {

  id:string;
  title: string;
  description?: string;

}

export const todo: TodoItem[] = [];

export function addTodo(data:Omit<TodoItem, "id">) {
  const id = uuid();
  todo.push({
    id:uuid(),
    ...data
  });
  return id
}


