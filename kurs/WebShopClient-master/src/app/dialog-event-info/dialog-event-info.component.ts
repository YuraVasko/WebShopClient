import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MyEventDetails } from '../models/eventDetails';
import { EventService } from '../services/event/event.service';
@Component({
  selector: 'app-dialog-event-info',
  templateUrl: './dialog-event-info.component.html',
  styleUrls: ['./dialog-event-info.component.css']
})
export class DialogEventInfoComponent implements OnInit {

  eventDetails : MyEventDetails;
  constructor( public dialogRef: MatDialogRef<DialogEventInfoComponent>,
               @Inject(MAT_DIALOG_DATA) public data: number, 
               private eventService: EventService) { 

  }

  ngOnInit(){
    this.eventService.getEventDetails(this.data).subscribe((result)=>{this.eventDetails = result});
    let a = 10;
  }
  
  goToEventClick() {
    this.eventService.goToEvent(this.eventDetails.event.id).subscribe();
    this.closeDialog();
  }

  cancelEventGoingClick() {
    this.eventService.cancelEventGoing(this.eventDetails.event.id).subscribe();
    this.closeDialog();
  }

  deleteEventClick() {
    this.eventService.cancelEvent(this.eventDetails.event.id).subscribe();
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
