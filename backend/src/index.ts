import express from "express";
import dotenv from "dotenv";
import getTodolist from "./controllers/getTodolist";
import addTodolist from "./controllers/addTodolist";
import proxy from "express-http-proxy";
export interface CommonResponseBody {
  data?: any

}

dotenv.config();


const app = express();

app.use(express.json());

app.get("/api/todo", getTodolist);
app.post("/api/todo",addTodolist );
app.use('/', proxy('http://localhost:4000/'));
const port= Number(process.env.PORT || 3000)

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});

