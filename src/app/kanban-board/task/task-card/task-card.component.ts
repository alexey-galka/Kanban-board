import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EditTaskComponent} from "../edit-task/edit-task.component";
import {DeleteTaskService} from "../../services/deleteTask.service";
import {EditTaskService} from "../../services/editTask.service";

@Component({
  selector: 'task-card',
  standalone: true,
  templateUrl: './task-card.component.html',
  imports: [
    FormsModule,
    NgIf,
    EditTaskComponent,
  ],
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() taskName: string = '';

  constructor(private deleteTask: DeleteTaskService, private editTask: EditTaskService) {}

  deleteCard(task: string): void {
    this.deleteTask.deleteTask(task);
  }

  editCard(status: boolean): void {
    this.editTask.setStatus(status);
  }
}
