const UserController = require("./controllers/UserController")
const AuthController = require("./controllers/AuthController");
const TodoController = require("../todolist_prisma/controllers/TodoController");

const _routes = [
  // http://localhost:8000/api/users
  ['users', UserController],
  // http://localhost:8000/api
  ['', AuthController],
  // http://localhost:8000/todos
  ['todos', TodoController]
]

const routes = (app) => {
    _routes.forEach(route => {
        const [url, controller] = route

        // http://localhost:8000/api
        app.use(`/api/${url}`, controller)
    })
}

module.exports = routes