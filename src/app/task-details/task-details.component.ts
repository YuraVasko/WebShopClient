import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../services/task/task-service.service';
import { Task } from '../models/task';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  firstMatrix: string[][];
  secondMatrix: string[][];
  resultMatrix: string[][];
  taskId : Number;
  task: Task;
  resultDisplayed: Boolean;

  constructor(private taskService: TaskServiceService, private route : ActivatedRoute) { }


  ngOnInit() {
    this.resultDisplayed = false;
    this.route.paramMap.subscribe(params=>{
      this.taskId = +params.get("taskId")
      this.taskService.detailsTask(this.taskId).subscribe((data)=>{
        this.firstMatrix = new Array();
        this.secondMatrix = new Array();
        this.resultMatrix = new Array();
        this.task = data
        this.resultDisplayed = 100 == this.task.percentageStatus;
        this.taskService.getTwoMatrixesFromString(this.task.condition, this.firstMatrix, this.secondMatrix);
        this.taskService.getMatrixFroResultString(this.task.result, this.resultMatrix);
        setInterval(() => {
          this.getPercentageStatus();
        }, 2000);
      });
    });
  }

  getPercentageStatus() {
    if (!this.resultDisplayed) {
      this.taskService.percentageTaskStatus(this.task.taskId).subscribe((data) => {
        this.task.percentageStatus = data;
        this.resultDisplayed = data == 100;
        if (this.resultDisplayed) {
          this.taskService.detailsTask(this.taskId).subscribe((data) => {
            this.firstMatrix = new Array();
            this.secondMatrix = new Array();
            this.resultMatrix = new Array();
            this.task = data
            this.taskService.getTwoMatrixesFromString(this.task.condition, this.firstMatrix, this.secondMatrix);
            this.taskService.getMatrixFroResultString(this.task.result, this.resultMatrix);
          });
        }
      });
    }
  }

  cancel() {
    this.taskService.cancelTask(this.taskId).subscribe();
  }

  pause() {
    this.taskService.pauseTask(this.taskId).subscribe();
  }

  resume() {
    this.taskService.resumeTask(this.taskId).subscribe();
  }
}
