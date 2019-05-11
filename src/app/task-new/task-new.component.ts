import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../services/task/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  constructor(private taskService : TaskServiceService, private router : Router) { }
  N :Number;
  Condition: string;

  ngOnInit() {
  }

  multiplyRandomMatrixes() {
    if(this.checkValidity())
    {
      this.taskService.generateRandomMatrixes(this.N).subscribe(data=> {
        window.alert("Task was added!");
      });
    }
    else 
    {
      window.alert("N should be less then 150");
    }
  }

  multiplyEnteredMatrixes() {
    if(this.checkValidity())
    {
      this.taskService.multiplyNewMatrixes(this.Condition).subscribe(data=> {
        window.alert("Task was added!");
      });
    }
    else 
    {
      window.alert("N should be less then 150");
    }
  }

  checkValidity(){
    return this.N != null && this.N < 150;
  }
}
