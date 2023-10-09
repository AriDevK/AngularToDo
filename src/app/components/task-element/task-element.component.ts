import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.model';
import { DeleteDialogComponent } from "../dialogs/delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.scss']
})
export class TaskElementComponent {
  @Input() task: Task = {
    id: 0,
    title: '',
    description: '',
    priority: 0,
    date: new Date(),
    done: false,
    deleted: false
  };

  @Output() deleteTask = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  public delete(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '350px',
      width: '600px',
      data: this.task
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deleteTask.emit(this.task.id);
      }
    });
  }
}
