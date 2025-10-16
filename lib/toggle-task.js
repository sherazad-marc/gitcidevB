function toggleTask(tasks, id) {
  const task = tasks.find((t) => t.id === id)
  if (!task) return
  task.done = !task.done
}
module.exports = toggleTask
