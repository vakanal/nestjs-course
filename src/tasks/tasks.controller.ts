import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Task {
    return this.taskService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return '';
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): string {
    return id;
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() task: CreateTaskDto): string {
    console.log(task);
    return id;
  }
}
