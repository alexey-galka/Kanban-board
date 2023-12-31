import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskCardComponent} from "./task/task-card/task-card.component";
import {TableBoardComponent} from "./table-board/table-board.component";
import {EditTaskComponent} from "./task/edit-task/edit-task.component";

@Component({
  selector: 'kanban-board',
  standalone: true,
  templateUrl: './kanban-board.component.html',
  imports: [
    HeaderComponent,
    NewTaskComponent,
    TaskCardComponent,
    TableBoardComponent,
    EditTaskComponent
  ],
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {

}
