import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CreateNewTaskService} from "../services/createNewTask.service";

@Component({
  selector: 'new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  taskName: string = '';
  newTaskName: Array<string> = [];
  constructor(private createNewTask: CreateNewTaskService) {}

    public onCreateTask(value: string): void {
      this.newTaskName = this.createNewTask.createNewTask(value);
      this.taskName = '';
    }
}
