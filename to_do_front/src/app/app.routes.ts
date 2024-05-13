import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent, 
        children: [
            {
                component: TasksComponent,
                path: 'tareas',
            }
        ]
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports:[
      RouterModule,
    ]
})
export class AppRoutingModule { }
