import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { Task } from './../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit  {

   date: String = formatDate(Date.now(), "fullDate", "en_US");
   tasks : Task[];
   taskName : string = "";

   constructor(private taskService : TaskService){ }
  
  ngOnInit(): void{
    this.getTasks();
  }
  

  private getTasks() {
    this.taskService.getTasks()
                    .subscribe(data => {this.tasks = data;},
                               error => console.log(error));   
  }
  
  public oneTaskCompleted(isDone :boolean, task: Task)
  {
      var index = this.tasks.indexOf(task);
      this.tasks[index].done = isDone;
      this.taskService.updateTask(task)
                      .subscribe(data => {console.log(data)});
  }

  public deleteTask(task : Task)
  {
    var index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
    this.taskService.deleteTask(task)
                    .subscribe(data => {console.log(data)});
  }

  public addNewTask(taskName :string)
  {
    var task : Task = new Task();
    task.date = formatDate(Date.now(), "yyyy-MM-dd", "en_US");
    task.taskName = taskName;
    task.done = false;
    console.log(taskName);
    console.log(task);
    this.taskName="";
    this.taskService.addNewTask(task)
                    .subscribe(data => {this.tasks.push(data)});
  }
}
