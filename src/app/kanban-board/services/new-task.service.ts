import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NewTaskService {
  private tasksList: Array<string> = [];
  public newTask$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public createTasks(value: string): Array<string> {
    this.tasksList.push(value);
    this.newTask$.next(this.tasksList);
    return this.tasksList
  }

  public receiveTasks(): Observable<string[]> {
    return this.newTask$.asObservable();
  }

  public deleteTask(card: string): Array<string> {
    const index: number = this.tasksList.indexOf(card);
    if (index !== -1) {
      this.tasksList.splice(index, 1)
      this.newTask$.next(this.tasksList);
    }
    return this.tasksList
  }

}
