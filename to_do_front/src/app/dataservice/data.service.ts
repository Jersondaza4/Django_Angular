import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface } from '../dataservice/task';


@Injectable()
export class DataService {
    API_URL: string = 'http://localhost:8000/task/';
    //API_URL: string = 'http://localhost:8000/task/?format=json';

    constructor(private httpClient: HttpClient) {}

    getTasks(): Observable<any> {
        const url = `${this.API_URL}$'?format=json'/`;
        return this.httpClient.get(this.API_URL);
    }

    deleteTask(taskId: number): Observable<any> {
        const url = `${this.API_URL}${taskId}/`;
        return this.httpClient.delete(url);
    }

    addTask(task: TaskInterface): Observable<any> {
        return this.httpClient.post(this.API_URL, task);
    }
}