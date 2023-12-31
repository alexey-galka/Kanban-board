import {Injectable} from "@angular/core";
import {CreateNewTaskService} from "./createNewTask.service";

@Injectable({
  providedIn: 'root',
})

export class DeleteTaskService {
  private taskList: Array<string> = [];

  constructor(private createNewTask: CreateNewTaskService) {}

  deleteTask(value: string): Array<string> {
    this.createNewTask.getTasks().subscribe((tasks: Array<string>) => this.taskList = tasks);
    const index: number = this.taskList.indexOf(value);
    if(index !== -1) {
      this.taskList.splice(index, 1);
      this.createNewTask.newTask$.next(this.taskList);
    }
    return this.taskList;
  }
}
