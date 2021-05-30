import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {

  @Input('isDone')
  isDone : Boolean;
 
  @Output()
  taskDone = new EventEmitter<boolean>();


  public taskCompleted(isDone : boolean)
  {
    this.isDone = isDone;
    this.taskDone.emit(isDone);
  }

}
