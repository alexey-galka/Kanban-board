import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TaskCardComponent} from "../task-card/task-card.component";
import {EditTaskService} from "../../services/editTask.service";
import {SaveTaskChangesService} from "../../services/saveTaskChanges.service";

@Component({
  selector: 'edit-task',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    TaskCardComponent
  ],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})

export class EditTaskComponent {
  @Input() taskName: string = '';

  constructor(private editTask: EditTaskService, private saveTaskChanges: SaveTaskChangesService) {}

  saveChanges(name: string, status: boolean): void {
    this.saveTaskChanges.saveChanges(name);
    this.editTask.setStatus(status);
  }

  cancelChanges(status: boolean): void {
    this.editTask.setStatus(status);
  }

}
