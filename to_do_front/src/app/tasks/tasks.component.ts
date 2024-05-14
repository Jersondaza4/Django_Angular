import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';
import { TaskInterface } from '../dataservice/task';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskList: TaskInterface[] = [];
  newTask: TaskInterface = { id: 0, name: '', description: '' }; 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.dataService.getTasks().subscribe({
      next: (res: TaskInterface[]) => {
        this.taskList = res;
        console.log(this.taskList); // Imprime los datos correctamente
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  deleteTask(taskId: number) {
    this.dataService.deleteTask(taskId).subscribe({
      next: () => {
        console.log('Tarea eliminada exitosamente');
        this.taskList = this.taskList.filter(task => task.id !== taskId);
      },
      error: (err) => {
        console.log('Error al eliminar la tarea:', err);
      }
    });
  }

  addTask() {
    this.dataService.addTask(this.newTask).subscribe({
      next: (res) => {
        console.log('Tarea agregada exitosamente:', res);
        this.getTasks(); // Actualizar la lista de tareas después de agregar una nueva tarea
        // También puedes realizar otras acciones después de agregar la tarea, como limpiar el formulario
        this.newTask = { id: 0, name: '', description: '' }; // Limpiar el objeto newTask
      },
      error: (err) => {
        console.log('Error al agregar la tarea:', err);
      }
    });
  }
}


/*implements OnInit { // Implementamos OnInit
  tasks: Task[] = [];

  constructor(private dataService: DataService) {} // Corregimos DataService a dataService

  ngOnInit(): void { // Implementamos el método ngOnInit
    this.getTasks();
  }

  getTasks(): void {
    this.dataService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        console.log(this.tasks); // Colocamos el console.log dentro del método subscribe para imprimir las tareas cuando estén disponibles
      });
  }*/