import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasksUrl = "http://localhost:8080/PlanMyDay/tasks";

  constructor(private httpClient: HttpClient) {}
  
  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.tasksUrl);
  }

  public updateTask(task : Task) :Observable<Task>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.put<Task>(this.tasksUrl+'/'+task.id, JSON.stringify(task), {headers: headers});
  }


  public deleteTask(task : Task) : Observable<string>{
    return this.httpClient.delete<string>(this.tasksUrl+'/'+task.id);
  }

  public addNewTask(task : Task) : Observable<Task>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<Task>(this.tasksUrl,JSON.stringify(task),{headers : headers});

  }
 
}
 