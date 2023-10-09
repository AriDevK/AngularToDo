import { Task } from "../models/task.model";

export const tasks: Task[] = [{
    id: 1,
    title: 'Buy milk',
    description: 'Go to the store and buy milk',
    priority: 3,
    date: new Date(),
    done: false,
    deleted: false
  },
  {
    id: 2,
    title: 'Buy bread',
    description: 'Go to the store and buy bread',
    priority: 2,
    date: new Date(),
    done: false,
    deleted: false
  },
];
