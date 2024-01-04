import {Component, OnInit} from '@angular/core';
import {TaskCardComponent} from "../task/task-card/task-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {CreateNewTaskService} from "../services/createNewTask.service";
import {TaskComponent} from "../task/task.component";
import {DragDropModule, moveItemInArray} from "@angular/cdk/drag-drop";
import {CdkDrag, CdkDragDrop, CdkDropList} from "@angular/cdk/drag-drop";
import {DragAndDropService} from "../services/dragAndDrop.service";

@Component({
  selector: 'table-board',
  standalone: true,
  templateUrl: './table-board.component.html',
  imports: [
    TaskCardComponent,
    NgForOf,
    NgIf,
    TaskComponent,
    CdkDropList,
    CdkDrag,
    DragDropModule,
  ],
  styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent implements OnInit {
  public backlog: Array<string> = [];
  public inProgress: Array<string> = [];
  public done: Array<string> = [];
  public archive: Array<string> = [];

  constructor(private createNewTask: CreateNewTaskService, private dragAndDrop: DragAndDropService) {}

  onDrop(event: CdkDragDrop<string[]>): void {
    this.dragAndDrop.drop(event);
  }

  ngOnInit(): void {
    this.createNewTask.getTasks().subscribe((cards: string[]) => this.backlog = cards);
  }

}
