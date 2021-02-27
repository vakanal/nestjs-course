import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task';

@Injectable()
export class TasksService {
  mockTasks: Task[] = [
    {
      id: 1,
      title: 'uno',
      description: 'desc uno',
      done: false,
    },
    {
      id: 2,
      title: 'dos',
      description: 'desc dos',
      done: false,
    },
    {
      id: 3,
      title: 'tres',
      description: 'desc tres',
      done: true,
    },
  ];

  getTasks(): Task[] {
    return this.mockTasks;
  }

  getTask(id: number): Task {
    return this.mockTasks.find((task: Task) => task.id === id);
  }
}
