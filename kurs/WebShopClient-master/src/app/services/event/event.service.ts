import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyEvent } from 'src/app/models/event';
import { environment } from 'src/environments/environment'
import { MyEventDetails } from 'src/app/models/eventDetails';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  addEvent(event: MyEvent) {
    let body = event;
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.post(environment.serverDomain + 'add/event', body, { headers: headers });
  }

  getAllEvents() {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get<Array<MyEvent>>(environment.serverDomain + 'get/all/events',{headers: headers});
  }

  goToEvent(eventId : number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.post<Array<MyEvent>>(environment.serverDomain + 'go/to/event', eventId, {headers: headers});
  }

  cancelEvent(eventId : number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.post<Array<MyEvent>>(environment.serverDomain + 'cancel/event', eventId, {headers: headers});
  }

  cancelEventGoing(eventId : number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.post<Array<MyEvent>>(environment.serverDomain + 'cancel/event/going', eventId, {headers: headers});
  }

  getEventDetails(eventId : number){
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get<MyEventDetails>(environment.serverDomain + 'event/details?eventId='+ eventId, {headers: headers});
  }
}
