import { RequestHandler } from "express"
import { addTodo, TodoItem } from "../models/todo"
import { CommonResponseBody } from ".."
interface RequestBody{
  title: string
  description?: string

}
export default <RequestHandler<unknown,CommonResponseBody,RequestBody> >((req, res) => {
const id = addTodo(req.body)
res.status(201).send({
  data:id
})
})
