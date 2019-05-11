import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { CatalogItem } from 'src/app/models/catalogItem'
import { Observable } from 'rxjs';
import {Task} from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }

  generateRandomMatrixes(numberOfRows: Number) {
    let headers = {
      'Authorization': 'Bearer ' + localStorage.currentUser
    }

    return this.http.get(environment.serverDomain + "add/random/task?n=" + numberOfRows, { headers: headers });
  }

  multiplyNewMatrixes(condition: string) {
    let headers = {
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get(environment.serverDomain + "add/task?condition=" + condition, { headers: headers });
  }

  cancelTask(taskId : Number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get(environment.serverDomain + "cancel/task?taskId=" + taskId, { headers: headers });
  }

  pauseTask(taskId : Number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get(environment.serverDomain + "pause/task?taskId=" + taskId, { headers: headers });
  }

  resumeTask(taskId : Number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get(environment.serverDomain + "resume/task?taskId=" + taskId, { headers: headers });
  }

  percentageTaskStatus(taskId: Number) {
    let headers = {
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get<Number>(environment.serverDomain + "percentage/task/" + taskId, { headers: headers });
  }

  detailsTask(taskId: Number) {
    let headers = {
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get<Task>(environment.serverDomain + "details/task/" + taskId, { headers: headers });
  }

  getTasksIds(){
    let headers = {
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get<Array<Number>>(environment.serverDomain + "get/tasks", { headers: headers });
  }

  getTwoMatrixesFromString(condition: String, firstMatrix: string[][], secondMatrix: string[][]) {
    let twoMatrixesInString = condition.split('*');
    let rowsOfFirstMatrix = twoMatrixesInString[0].split('|');
    let rowsOfSecondMatrix = twoMatrixesInString[1].split('|');
    let N = rowsOfFirstMatrix.length;
    for(let i=0; i<rowsOfFirstMatrix.length; i++)
    {
        let row = rowsOfFirstMatrix[i].split(',');
        firstMatrix.push(row);

        let seconRow = rowsOfSecondMatrix[i].split(',');
        secondMatrix.push(seconRow);
    }
  }

  getMatrixFroResultString(result: String, matrix : string[][])
  {
    let rowsOfFirstMatrix = result.split('|');
    for(let i=0; i<rowsOfFirstMatrix.length; i++)
    {
        let row = rowsOfFirstMatrix[i].split(',');
        matrix.push(row);
    }
  }
  
  writeMatrixCondition(matrix: string[][])
  {
    let result = '';
    for(let i = 0; i < matrix.length; i++)
    {
      result = matrix[i].join(',');
      result += '|'
    }
    return result;
  }
}
