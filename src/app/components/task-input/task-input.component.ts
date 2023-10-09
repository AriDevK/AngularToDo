import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {
  @Output() newTask = new EventEmitter<Task>();

  public task: Task = {
    id: 0,
    title: '',
    description: '',
    priority: 0,
    date: new Date(),
    done: false,
    deleted: false
  };

  public addTask(): void {
    if (this.task.title === '') {
      alert('Please enter a title');
    }

    if (this.task.priority === 0) {
      alert('Please enter a priority');
    }

    this.newTask.emit(this.task);
    this.clearTask();
  }

  public clearTask(): void {
    this.task = {
      id: 0,
      title: '',
      description: '',
      priority: 0,
      date: new Date(),
      done: false,
      deleted: false
    };
  }
}
