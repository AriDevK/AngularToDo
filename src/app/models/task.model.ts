export interface Task {
  id: number;
  title: string;
  description: string;
  priority: number;
  date: Date;
  done: boolean;
  deleted: boolean;
}
