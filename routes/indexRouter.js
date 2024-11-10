import { Router } from "express";
const indexRouter = Router();

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
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
  messages.push({ id: messages.length, text: req.body.text, user: req.body.author, added: new Date() });
  res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  const message = messages.find((message) => message.id === Number(req.params.id));
  if (message) {
    res.render("messageDetails", { message: message });
  } else {
    res.writeHead(404, "Message not found");
    res.end();
  }
});

export default indexRouter;
