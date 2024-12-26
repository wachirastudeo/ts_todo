import express from "express";
import dotenv from "dotenv";
import getTodolist from "./controllers/getTodolist";
export interface CommonResponseBody {
  data?: any

}

dotenv.config();


const app = express();

app.use(express.json());

const port= Number(process.env.PORT || 3000)
app.get("/api/todo", getTodolist);
app.post("/api/todo", );
app.get("/ping", (req, res) => {
  res.send("pong");
})

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});

