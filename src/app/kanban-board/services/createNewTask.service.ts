import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class CreateNewTaskService {
  private tasksList: Array<string> = [];
  public newTask$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public createNewTask(value: string): Array<string> {
    this.tasksList.push(value);
    this.newTask$.next(this.tasksList);
    return this.tasksList
  }

  public getTasks(): Observable<string[]> {
    return this.newTask$.asObservable();
  }

}
