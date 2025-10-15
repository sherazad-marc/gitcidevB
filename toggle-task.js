class TaskList {
  constructor() {
    this.tasks = []; 
    this.nextId = 1; 
  }

 
  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) {
      console.log(` Tâche avec l'id ${id} non trouvée`);
      return;
    }

    task.done = !task.done;
    const status = task.done ? " Terminée" : "En cours";
    console.log(` Tâche #${id} "${task.name}" → ${status}`);
  }


  showTasks() {
    console.log(" Liste des tâches :");
    this.tasks.forEach(task => {
      const status = task.done ? " Terminée" : " En cours";
      console.log(`#${task.id} - ${task.name} → ${status}`);
    });
  }
}

const list = new TaskList();

list.addTask("Écrire le script");
list.addTask("Créer le storyboard");

list.showTasks();

list.toggleTask(1); 
list.toggleTask(2); 
list.showTasks();
