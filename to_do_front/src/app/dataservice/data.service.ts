import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class DataService {

    API_URL: string = 'http://localhost:8000/task/?format=json';

    constructor(private httpClient: HttpClient) {}

    getTasks(): Observable<any> {
        return this.httpClient.get(this.API_URL);
    }
}