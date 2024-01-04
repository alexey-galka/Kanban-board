import { Component, Input } from '@angular/core';
import { NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TaskCardComponent } from "../task-card/task-card.component";
import { EditTaskService } from "../../services/editTask.service";
import { SaveTaskChangesService } from "../../services/saveTaskChanges.service";

@Component({
  selector: 'edit-task',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    TaskCardComponent
  ],
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})

export class EditTaskComponent {
  @Input() taskName: string = '';
  newTaskName: string = '';

  constructor(private editTask: EditTaskService, private saveTaskChanges: SaveTaskChangesService) {}

  saveChanges(status: boolean): void {
    this.saveTaskChanges.saveChanges(this.taskName, this.newTaskName);
    this.editTask.setStatus(status);
  }

  cancelChanges(status: boolean): void {
    this.editTask.setStatus(status);
  }

  onTaskNameChange(newValue: string) {
    this.newTaskName = newValue;
  }
}
