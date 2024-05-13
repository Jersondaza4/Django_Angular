import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  tasks = [
    {
      id: 1,
      title: 'Task',
      route: '/tareas',
      icon: 'dashboard',
    },
    {
      id: 2,
      title: 'Art',
      route: '/arts',
      icon: 'dashboard',
    }
  ]
}
