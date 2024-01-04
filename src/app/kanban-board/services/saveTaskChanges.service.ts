import { Injectable } from '@angular/core';
import { CreateNewTaskService } from './createNewTask.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SaveTaskChangesService {
  private taskListSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  taskList$: Observable<string[]> = this.taskListSubject.asObservable();

  constructor(private createNewTask: CreateNewTaskService) {
    this.loadTaskList();
  }

  private loadTaskList(): void {
    this.createNewTask.getTasks().pipe(take(1)).subscribe((list: Array<string>) => {
      this.taskListSubject.next(list);
    });
  }

  saveChanges(originalName: string, newName: string): void {
    const updatedList: Array<string> = [...this.taskListSubject.value];
    const index: number = updatedList.indexOf(originalName);

    if (index !== -1) {
      updatedList[index] = newName;
      this.taskListSubject.next(updatedList);
      this.createNewTask.newTask$.next(updatedList);
    }
  }
}
