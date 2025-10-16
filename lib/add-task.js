function addTask(tasks, name, nextId) {
  const trimmedName = name.trim()

  if (trimmedName === "") {
    console.log("Le nom de la tâche ne peut pas être vide !")
    return null
  }

  const newTask = {
    id: nextId,
    name: trimmedName,
    done: false,
  }

  tasks.push(newTask)
  console.log(`Tâche ajoutée : "${newTask.name}" (id: ${newTask.id})`)
  return newTask
}

module.exports = addTask
