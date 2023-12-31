import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class EditTaskService {
  public isEdited: boolean = false;
  public status$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setStatus(status: boolean): void {
    this.isEdited = status;
    this.status$.next(this.isEdited);
  }

  getStatus(): Observable<boolean> {
    return this.status$.asObservable();
  }

}
