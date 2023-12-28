import {Component, Input} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {NewTaskService} from "../services/new-task.service";

@Component({
  selector: 'task-card',
  standalone: true,
  templateUrl: './task-card.component.html',
  imports: [
    AsyncPipe
  ],
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  constructor(private newTaskService: NewTaskService) {}
  @Input() card: string = '';

  public deleteTask(card: string): void {
    this.newTaskService.deleteTask(card);
  }

}
