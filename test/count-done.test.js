const countDone = require("../lib/count-done")

const tasks = [
  { id: 1, name: "Task 1", done: false },
  { id: 2, name: "Task 2", done: true },
  { id: 3, name: "Task 3", done: true },
]

test("countDone returns the correct number of completed tasks", () => {
  expect(countDone(tasks)).toBe(2)
})
