import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {EditTaskComponent} from "./edit-task/edit-task.component";
import {TaskCardComponent} from "./task-card/task-card.component";
import {EditTaskService} from "../services/editTask.service";

@Component({
  selector: 'task',
  standalone: true,
  imports: [
    NgIf,
    EditTaskComponent,
    TaskCardComponent
  ],
  providers: [EditTaskService],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {
  @Input() task: string = '';
  isEdited: boolean = false;

  constructor(private editTask: EditTaskService) {}

  ngOnInit(): void {
    this.editTask.getStatus().subscribe((status: boolean) => this.isEdited = status);
  }
}
