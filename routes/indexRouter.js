import { Router } from "express";
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("newMessageForm");
});

indexRouter.post("/new", (req, res) => {
  console.log(req.body);
  res.end();
});

export default indexRouter;
