import { Component, OnInit, DoCheck } from '@angular/core';
import { Task } from './models/task.model';
import { StorageService } from "./services/storage.service";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'angular-todo';
  public pageSize = 3;
  public pageIndex = 0;
  public tasks: Task[] = []
  public tasksPage: Task[] = []


  constructor(private storageService: StorageService) {}
  ngDoCheck(): void {
    this.loadTasks();
  }
  ngOnInit(): void {
    this.loadTasks();
  }

  public addTask(task: Task): void {
    console.log(task);
    if (this.storageService.exists(task)) {
      alert('Task already exists');
      return;
    }

    this.storageService.addTask(task);
    this.loadTasks();
  }

  public deleteTask(id: number): void {
    this.storageService.deleteTask(id);
    this.loadTasks();
  }

  public handlePaginatorEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.loadTasks();
  }

  private loadTasks(): void {
    this.tasks = this.storageService.getTasks();
    this.tasksPage = this.storageService.getTaskPage(this.pageIndex, this.pageSize);
  }
}
