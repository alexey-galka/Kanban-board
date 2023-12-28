import { Component } from '@angular/core';
import {KanbanBoardComponent} from "./kanban-board/kanban-board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    KanbanBoardComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban-board';
}
