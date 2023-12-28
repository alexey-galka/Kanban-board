import {Component, OnInit} from '@angular/core';
import {TaskCardComponent} from "../task-card/task-card.component";
import {NewTaskService} from "../services/new-task.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'table-board',
  standalone: true,
  templateUrl: './table-board.component.html',
  imports: [
    TaskCardComponent,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent implements OnInit {
  public cards: Array<string> = [];
  constructor(private newTaskService: NewTaskService) {}


  ngOnInit() {
    this.newTaskService.receiveTasks().subscribe((card: string[]) => this.cards = card);
  }

}
