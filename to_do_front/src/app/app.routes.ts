import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/task-add/task-add.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent, 
        children: [
            {
                path: 'tareas',
                children: [
                    {
                        path: '',
                        component: TasksComponent,
                    },
                    {
                        path: 'add',
                        component: TasksAddComponent,
                    }
                ]
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
