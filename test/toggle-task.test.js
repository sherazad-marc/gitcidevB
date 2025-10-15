const toggleTask = require("../lib/toggle-task")

test("toggleTask inverse done", () => {
  const tasks = [{ id: 1, name: "T1", done: false }]
  toggleTask(tasks, 1)
  expect(tasks[0].done).toBe(true)
})
