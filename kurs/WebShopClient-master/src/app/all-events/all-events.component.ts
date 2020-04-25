import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { RoomService } from '../services/room/room.service';
import { EventService } from '../services/event/event.service';
import { MyEvent } from '../models/event';
import { element } from '@angular/core/src/render3';
import { DialogEventInfoComponent } from '../dialog-event-info/dialog-event-info.component';
import { MyEventDetails } from '../models/eventDetails';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  options: FormGroup;
  userRole: String;
  isAuthorize: Boolean;
  displayedColumns: string[] = ['id', 'eventName', 'roomNumber', 'startDate', 'duration', 'action'];
  eventData: Array<MyEvent>;
  dataSource = new MatTableDataSource<MyEvent>(this.eventData);
  hoursToAdd = 3;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    private roomService: RoomService,
    private eventService: EventService,
    public dialog: MatDialog) {

  }

  ngOnInit() {
    this.userRole = this.userService.getUserRoleFromToken();
    this.isAuthorize = this.userRole != undefined;
    this.populateEvents();
  }

  viewDetails(eventId: number) {

    const dialogRef = this.dialog.open(DialogEventInfoComponent, {
      data: eventId
    });

    dialogRef.afterClosed().subscribe(result => {
      this.populateEvents();
    });
  }

  populateEvents(){
    this.eventService.getAllEvents().subscribe(data => {
      this.eventData = data;
      this.dataSource = new MatTableDataSource<MyEvent>(this.eventData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
