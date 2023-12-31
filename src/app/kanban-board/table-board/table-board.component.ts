import {Component, OnInit} from '@angular/core';
import {TaskCardComponent} from "../task/task-card/task-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {CreateNewTaskService} from "../services/createNewTask.service";
import {TaskComponent} from "../task/task.component";

@Component({
  selector: 'table-board',
  standalone: true,
  templateUrl: './table-board.component.html',
  imports: [
    TaskCardComponent,
    NgForOf,
    NgIf,
    TaskComponent,
  ],
  styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent implements OnInit {
  public cards: Array<string> = [];
  constructor(private createNewTask: CreateNewTaskService) {}

  ngOnInit(): void {
    this.createNewTask.getTasks().subscribe((cards: string[]) => this.cards = cards);
    console.log(this.cards)
  }

}
