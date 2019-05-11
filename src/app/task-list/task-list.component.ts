import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../services/task/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskServiceService, private router: Router) { }
  taskIds: Array<Number>;
  tasks: Array<Task>;
  ngOnInit() {
    this.tasks = new Array<Task>();
    this.taskService.getTasksIds().subscribe(data => {
      this.taskIds = data;

      this.taskIds.forEach(element => {
        let task = new Task();
        task.id = element;
        task.href = this.getDetails(element);
        this.tasks.push(task);
      });
    });
  }

  getDetails(taskId: Number)
  {
    return '/task/details/'+ taskId;
  }
}

class Task {
  id : Number;
  href : String;
}
