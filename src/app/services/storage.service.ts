import { Injectable } from '@angular/core';
import { Task } from "../models/task.model";
import { tasks } from "../mock/tasks";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private idCount = 3;
  private tasks: Task[] = tasks;

  public getTasks(): Task[] {
    return this.tasks;
  }

  public addTask(task: Task): void {
    task.id = ++this.idCount
    this.tasks.push(task);
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  public exists(task: Task): boolean {
    return this.tasks.filter(t => t.title === task.title).length > 0;
  }

  public getTaskPage(page: number, pageSize: number): Task[] {
    const start = page * pageSize;
    const end = start + pageSize;
    return this.tasks.slice(start, end);
  }
}
