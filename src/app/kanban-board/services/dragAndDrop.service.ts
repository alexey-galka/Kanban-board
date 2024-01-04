import {Injectable, OnInit} from "@angular/core";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {CreateNewTaskService} from "./createNewTask.service";


@Injectable({
  providedIn: 'root'
})

export class DragAndDropService {
  private backlog: Array<string> = [];
  private inProgress: Array<string> = [];
  private done: Array<string> = [];
  private archive: Array<string> = [];

  constructor(private createNewTask: CreateNewTaskService) {
    this.createNewTask.getTasks().subscribe((tasks: Array<string>) => this.backlog = tasks);
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.backlog, event.previousIndex, event.currentIndex);

    // const target = event.container.data;
    //
    // if (event.container === event.previousContainer) {
    //   moveItemInArray(this.backlog, event.previousIndex, event.currentIndex);
    // } else {
    //   this.inProgress.push();
    // }
  }
}
