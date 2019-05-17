class Todo {
  constructor({ id, name, completed = false }) {
    this.id = id
    this.name = name
    this.completed = completed
  }
}

// TODO
const todoMock = new Todo({
  id: 0,
  name: 'Example Todo',
  completed: true,
})

class State {
  constructor({ todos = [todoMock] } = {}) {
    this.todos = todos
  }
}

export { State, Todo }
