import {Injectable} from "@angular/core";
import {CreateNewTaskService} from "./createNewTask.service";

@Injectable({
  providedIn: 'root'
})

export class SaveTaskChangesService {
  private taskList: Array<string> = [];

  constructor(private createNewTask: CreateNewTaskService) {}

  // Значение не передается в task-card
  // Похоже, что данные инициализируются. При их добавлении массив не обновляется
  // Посмотри в сторону pipe
  saveChanges(name: string): Array<string> {
    this.createNewTask.getTasks().subscribe((list: Array<string>) => this.taskList = list);
    const index: number = this.taskList.indexOf(name);
    if(index !== -1) {
      console.log(index);
      this.taskList[index] = name;
      this.createNewTask.newTask$.next(this.taskList);
    }
    console.log(this.taskList)
    return this.taskList;
  }

}
