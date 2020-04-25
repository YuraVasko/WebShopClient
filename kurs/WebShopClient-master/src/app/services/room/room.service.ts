import { Injectable } from '@angular/core';
import { Room } from 'src/app/models/room';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { RoomFiltering } from 'src/app/models/roomFilter';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  addRoom(room: Room) {
    let body = room;
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.post(environment.serverDomain + 'add/room', body,{headers: headers});
  }

  getRooms() {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.get<Array<Room>>(environment.serverDomain + 'get/all/rooms',{headers: headers});
  }

  getRoomsByFilter(filters : RoomFiltering) {
    let body = filters;
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.post<Array<Room>>(environment.serverDomain + 'get/rooms/by/filter', body,{headers: headers});
  }

  deleteRoom(roomId: number) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.currentUser
    }
    return this.http.post(environment.serverDomain + 'add/room', roomId, {headers: headers});
  }
}
