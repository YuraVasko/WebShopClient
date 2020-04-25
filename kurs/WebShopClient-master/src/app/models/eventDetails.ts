import { MyEvent } from './event';

export class MyEventDetails {
    event: MyEvent; 
    organizer: string;
    visitorsCount: Number;
    isVisited: Boolean; 
    isUserOrganizer: Boolean;
}