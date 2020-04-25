import { Component, OnInit } from '@angular/core';
import { RoomFiltering } from '../models/roomFilter';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../services/room/room.service';
import { MyEvent } from '../models/event';
import { EventService } from '../services/event/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  newEvent : MyEvent;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  filter = new RoomFiltering();
  roomsNumbers : Array<String>;
  constructor(private _formBuilder: FormBuilder,
     private roomService: RoomService,
     private eventService : EventService,
     private router: Router) {

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      date: ['', Validators.required],
      startHour: ['', Validators.required],
      startMinute: ['', Validators.required],
      duration: ['', Validators.required],
      minCapacity: ['', Validators.required],
      isComputerClass: false,
      hasProjector: false,
      roomNumber : 0
    });
    this.secondFormGroup = this._formBuilder.group({
      eventName: ['', Validators.required],
      eventDescription: ['', Validators.required]
    });
  }

  findRoomClick() {
    this.filter.isComputerClass = this.firstFormGroup.value.isComputerClass;
    this.filter.hasProjector = this.firstFormGroup.value.hasProjector;
    this.filter.dateTime = this.firstFormGroup.value.date;
    this.filter.dateTime.setHours(this.firstFormGroup.value.startHour);
    this.filter.dateTime.setMinutes(this.firstFormGroup.value.startMinute);
    this.filter.capacity = this.firstFormGroup.value.minCapacity;
    this.filter.duration = this.firstFormGroup.value.duration;
    this.roomService.getRoomsByFilter(this.filter).subscribe(data => {
      this.roomsNumbers = [];
      data.forEach((element) => this.roomsNumbers.push(element.roomNumber));
    });
  }

  addEventClick(){
    this.newEvent = new MyEvent();
    this.newEvent.description = this.secondFormGroup.value.eventDescription;
    this.newEvent.eventName = this.secondFormGroup.value.eventName;
    this.newEvent.duration = this.filter.duration;
    this.newEvent.startDate = this.filter.dateTime;
    this.newEvent.roomNumber = this.firstFormGroup.value.roomNumber;
    this.eventService.addEvent(this.newEvent).subscribe(()=>this.router.navigate(['/events']));
  }
}
