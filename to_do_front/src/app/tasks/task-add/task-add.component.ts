import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../../dataservice/task';
import { DataService } from '../../dataservice/data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TasksAddComponent implements OnInit {

  newTask: TaskInterface = { id: 0, name: '', description: '' }; // Nueva tarea a agregar

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  save(): void {
    this.dataService.addTask(this.newTask).subscribe({
      next: (res) => {
        console.log('Tarea agregada exitosamente:', res);
        this.redirect();
      },
      error: (err) => {
        console.log('Error al agregar la tarea:', err);
      }
    });
  }

  redirect(): void {
    this.router.navigate(['./tasks']);
  }

  ngOnInit(): void {
  }

}
