import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';
import { TaskInterface } from '../dataservice/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskList: TaskInterface[] = [];

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