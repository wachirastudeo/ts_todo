import { RequestHandler } from "express"
import { todo } from "../models/todo"
import { CommonResponseBody } from ".."
export default <RequestHandler<unknown,CommonResponseBody>>((req, res) => {
  res.send({
    data: todo
  })
}
)
