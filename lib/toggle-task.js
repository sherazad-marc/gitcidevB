function toggleTask(id) {
  const task = this.tasks.find((t) => t.id === id)
  if (!task) {
    console.log(` Tâche avec l'id ${id} non trouvée`)
    return
  }

  task.done = !task.done
  const status = task.done ? " Terminée" : "En cours"
  console.log(` Tâche #${id} "${task.name}" → ${status}`)
}