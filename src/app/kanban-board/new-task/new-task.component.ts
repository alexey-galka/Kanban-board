import {Component} from '@angular/core';
import {NewTaskService} from "../services/new-task.service";
import {FormsModule} from "@angular/forms";

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
  constructor(private newTaskService: NewTaskService) {}

    public onCreateTask(value: string): void {
      this.newTaskName = this.newTaskService.createTasks(value);
      this.taskName = '';
    }
}
