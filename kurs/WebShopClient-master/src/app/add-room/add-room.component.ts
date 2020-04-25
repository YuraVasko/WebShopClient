import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { FormControl, Validators } from '@angular/forms';
import { RoomService } from '../services/room/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  constructor(private roomService: RoomService, private router: Router) { }

  newRoom = new Room();
  roomNumber = new FormControl('', [Validators.required]);
  roomCapacity = new FormControl('', [Validators.required]);
  additionalInfo = new FormControl('');


  ngOnInit() {
    this.newRoom.hasProjector
  }

  addRoomClick()
  {
    this.newRoom.additionalInfo = this.additionalInfo.value;
    this.newRoom.capacity = this.roomCapacity.value;
    this.newRoom.roomNumber = this.roomNumber.value;
    this.roomService.addRoom(this.newRoom).subscribe(()=>this.router.navigate(['/rooms']));
  }
}
