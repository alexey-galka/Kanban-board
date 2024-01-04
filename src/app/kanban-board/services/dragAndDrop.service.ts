import {Injectable, OnInit} from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {CreateNewTaskService} from "./createNewTask.service";


@Injectable({
  providedIn: 'root'
})

export class DragAndDropService {
  private backlog: Array<string> = [];

  constructor(private createNewTask: CreateNewTaskService) {
    this.createNewTask.getTasks().subscribe((tasks: Array<string>) => this.backlog = tasks);
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.container === event.previousContainer) {
      moveItemInArray(this.backlog, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
