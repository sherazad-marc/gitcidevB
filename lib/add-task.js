class TaskList {
  constructor() {
    this.tasks = []; 
    this.nextId = 1; 
  }

 
  addTask(name) {
    const trimmedName = name.trim(); 

    if (trimmedName === "") {
      console.log(" Le nom de la tâche ne peut pas être vide !");
      return;
    }

    const newTask = {
      id: this.nextId++,
      name: trimmedName,
      done: false
    };

    this.tasks.push(newTask);
    console.log(` Tâche ajoutée : "${newTask.name}" (id: ${newTask.id})`);
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

list.addTask("  Écrire le scénario  ");  
list.addTask("Créer le storyboard"); 
list.addTask("  ");

list.showTasks();
