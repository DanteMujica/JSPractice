const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go to museum',
    completed: true
  },
  {
    id: 3,
    title: 'Go shopping',
    completed: false
  },
]

for (let todo of todos) {
  console.log(todo.title);
  // let todo = todos[i];
  // if(todo.completed === true)
  // console.log(i, todos[1].title);
}