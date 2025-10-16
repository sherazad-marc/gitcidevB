const addTask = require("../lib/add-task")

test("addTask ajoute une tâche", () => {
  const tasks = []
  let nextId = 1

  addTask(tasks, "Tâche 1", nextId++)

  expect(tasks[0].done).toBe(false)
  expect(tasks[0].name).toBe("Tâche 1")
  expect(tasks[0].id).toBe(1)
})
