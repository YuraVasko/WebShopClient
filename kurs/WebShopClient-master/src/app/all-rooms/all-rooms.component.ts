import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Room } from '../models/room';
import { UserService } from '../services/user/user.service';
import { RoomService } from '../services/room/room.service';
import { RoomFiltering } from '../models/roomFilter';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.css']
})
export class AllRoomsComponent implements OnInit {

  options: FormGroup;
  userRole: String;
  isAuthorize: Boolean;
  displayedColumns: string[] = ['id', 'roomNumber', 'capacity', 'hasProjector', 'isComputerClass', 'action'];
  roomsData: Array<Room>;
  dataSource = new MatTableDataSource<Room>(this.roomsData);
  filter = new RoomFiltering();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService, private roomService: RoomService, fb: FormBuilder) {
    this.options = fb.group({
      isComputerClass: false,
      hasProjector: false
    });
  }

  ngOnInit() {
    this.userRole = this.userService.getUserRoleFromToken();
    this.isAuthorize = this.userRole != undefined
    this.populateRooms();
  }

  filterClick() {
    if(this.options.value.isComputerClass != undefined)
    {
      this.filter.isComputerClass = this.options.value.isComputerClass;
    }
    if(this.options.value.hasProjector != undefined)
    {
      this.filter.hasProjector = this.options.value.hasProjector;
    }
    if(this.filter.hour != undefined)
    {
      this.filter.dateTime.setHours(this.filter.hour);
    }
    if(this.filter.minute != undefined)
    {
      this.filter.dateTime.setMinutes(this.filter.minute);
    }
    if(this.filter.capacity != undefined)
    {
      this.filter.capacity =  this.filter.capacity; 
    }
    this.roomService.getRoomsByFilter(this.filter).subscribe(data => {
      this.roomsData = data;
      this.dataSource = new MatTableDataSource<Room>(this.roomsData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteClick(roomId: number) {
    this.roomService.deleteRoom(roomId).subscribe(() => this.populateRooms());
  }

  populateRooms() {
    this.roomService.getRooms().subscribe(data => {
      this.roomsData = data;
      this.dataSource = new MatTableDataSource<Room>(this.roomsData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}