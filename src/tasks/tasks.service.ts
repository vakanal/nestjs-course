import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async getTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async getTask(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  /*
  mockTasks: ITask[] = [
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

  getTasks(): ITask[] {
    return this.mockTasks;
  }

  getTask(id: number): ITask {
    return this.mockTasks.find((task: ITask) => task.id === id);
  }
  */
}
